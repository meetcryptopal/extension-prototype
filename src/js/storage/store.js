import FileSaver from "file-saver";
import JSZip from "jszip";
import json2csv from "json2csv";
import bip39 from "bip39";
import _ from "lodash";

import { encrypt, decrypt } from "./encryption";

const ROOT_KEY = "ROOT-KEY";
const PW_KEY = "PW-KEY";

// TODO: Make this dynamic.
const PW = "cryptopal";
const ERR_JSON = { error: "Incorrect Private Key" };

export const store = window.chrome.storage.local;

export const loadPass = cb => {
  // console.log("INSIDE LOAD PASS", store);
  store.get(PW_KEY, state => {
    const pw = state[PW_KEY];
    // console.log("PASSWORD: ", pw);
    if (!isEmptyState(pw)) return cb(pw, false); // only call callback if password exists. otherwise, do nothing
  });
};

export const checkOrGenPass = cb => {
  // console.log("INSIDE CHECK OR GEN PASS", store);
  store.get(PW_KEY, state => {
    const pw = state[PW_KEY];
    // console.log("PASSWORD: ", pw);
    if (!isEmptyState(pw)) return cb(pw, false); // already set.

    const mnemonic = bip39.generateMnemonic();
    const genPw = bip39.mnemonicToSeedHex(mnemonic).slice(0, 30);

    store.set({ [PW_KEY]: genPw }, () => cb(genPw, true));
  });
};

export const updateStore = (key, reducer, initState = {}) => action => {
  // console.log("INSIDE UPDATE STORE", store);
  store.get(null, storedData => {
    const pass = storedData[PW_KEY];
    if (!pass) return;

    // Decrypt.
    let encryptedData = storedData[ROOT_KEY];
    encryptedData = isEmptyState(encryptedData) ? "" : encryptedData;
    let state = decrypt(encryptedData, pass);
    state = isEmptyState(state) ? {} : JSON.parse(state);

    // Reduce state.
    const currState = isEmptyState(state[key]) ? initState : state[key];
    const nextState = reducer(currState, action);
    state[key] = nextState; // WARNING: Mutation!!!
    console.log(key, state);

    // Encrypt.
    const encryptedNextState = encrypt(JSON.stringify(state), pass);

    // Update store.
    store.set({ [ROOT_KEY]: encryptedNextState });
  });
};

const downloadJson = (data, opts) => {
  opts = opts || {};
  const errJson = opts.raw ? { error: "no data" } : ERR_JSON;

  data = isEmptyState(data) ? errJson : data;

  // Blacklist
  data.amazon = _.omit(data.amazon, ["cartItems"]);

  // Hack to prettify.
  data = JSON.stringify(data, null, 2);

  var dataBlob = new Blob([data], { type: "application/json" });
  FileSaver.saveAs(dataBlob, `cryptopal${opts.raw ? "-encrypted" : ""}.json`);
};

export const fetchState = (key, cb, errCb, opts) => {
  // console.log("INSIDE FETCH STATE", store);
  opts = opts || {};
  // Uncomment for debugging
  // key = PW;

  store.get(null, storedData => {
    let state = storedData[ROOT_KEY];
    console.log("RAW", storedData);

    if (!opts.raw && !isEmptyState(state)) {
      // Decrypt.
      try {
        state = decrypt(state, key);
        state = JSON.parse(state);
      } catch (error) {
        console.log("Decrypt error: ", error);
      }
    }

    return cb(!!state ? state : {});
  });
};

export const downloadData = (key = "") => {
  fetchState(key, downloadJson, downloadJson);
};

export const downloadDataRaw = () => {
  const downloadJsonRaw = data => downloadJson(data, { raw: true });
  fetchState(null, downloadJsonRaw, downloadJsonRaw, { raw: true });
};

// CSV
const downloadCsv = (data, filename) => {
  const dataBlob = new Blob([data], { type: "text/csv" });
  FileSaver.saveAs(dataBlob, `${filename}.csv`);
};

const zipCsv = (zip, data, filename) => {
  const dataBlob = new Blob([data], { type: "text/csv" });
  return zip.file(filename, dataBlob);
};

const fetchAndParse = (key, adapter, filename) =>
  fetchState(key, state => downloadCsv(adapter(state), filename), downloadJson);

export const zipAll = (key = "") => {
  const zip = new JSZip();
  fetchState(
    key,
    state => {
      [
        [ordersCsv, "cryptopal-amazon.csv"],
        [browsingCsv, "cryptopal-browsing-history.csv"],
        [shopifyCsv, "cryptopal-shopify.csv"],
        [facebookLikesCsv, "cryptopal-facebook-likes.csv"],
        [twitterLikesCsv, "cryptopal-twitter-likes.csv"],
        [twitterRetweetsCsv, "cryptopal-twitter-retweets.csv"]
      ].reduce(
        (zip, [adapter, filename]) => zipCsv(zip, adapter(state), filename),
        zip
      );

      zip
        .generateAsync({ type: "blob" })
        .then(blob => FileSaver.saveAs(blob, "cryptopal.zip"));
    },
    downloadJson
  );
};

export const downloadAmazonOrders = (key = "") =>
  fetchAndParse(key, ordersCsv, "cryptopal-amazon");
export const downloadBrowsing = (key = "") =>
  fetchAndParse(key, browsingCsv, "cryptopal-browsing-history");
export const downloadShopifyOrders = (key = "") =>
  fetchAndParse(key, shopifyCsv, "cryptopal-shopify");
export const downloadFacebookLikes = (key = "") =>
  fetchAndParse(key, facebookLikesCsv, "cryptopal-facebook-likes");
export const downloadTwitterLikes = (key = "") =>
  fetchAndParse(key, twitterLikesCsv, "cryptopal-twitter-likes");
export const downloadTwitterRetweets = (key = "") =>
  fetchAndParse(key, twitterLikesCsv, "cryptopal-twitter-retweets");

// CSV Mapping
// TODO: Move this somewhere else?

const getState = (state, key) => (state && state[key]) || {};

const ordersCsv = state => {
  const orders = getState(state, "amazon").orders || [];
  const fields = ["name", "quantity", "price", "href"];
  const opts = { fields };

  const data = orders.map(o => ({
    name: o.productName,
    quantity: o.productQuantity,
    price: o.productPrice,
    href: o.productHref
  }));

  return json2csv.parse(data, opts);
};

const browsingCsv = state => {
  const sites = getState(state, "history").sites || [];
  const fields = ["title", "url"];
  const opts = { fields };

  return json2csv.parse(sites, opts);
};

const shopifyCsv = state => {
  const orders = getState(state, "shopify").orders || [];
  const fields = ["name", "quantity", "price"];
  const opts = { fields };

  const data = orders.map(o => ({
    name: o.productName,
    quantity: o.productQuantity,
    price: o.productPrice
  }));

  return json2csv.parse(data, opts);
};

const facebookLikesCsv = state => {
  const likedPosts = getState(state, "facebook").likedPosts || [];
  const fields = ["username", "anchorText", "href", "content", "mediaHref"];
  const opts = { fields };

  return json2csv.parse(likedPosts, opts);
};

const twitterLikesCsv = state => {
  const favoritedPosts = getState(state, "twitter").favoritedPosts || [];
  const fields = ["handle", "username", "content"];
  const opts = { fields };

  return json2csv.parse(favoritedPosts, opts);
};

const twitterRetweetsCsv = state => {
  const retweets = getState(state, "twitter").retweetedPosts || [];
  const fields = ["handle", "username", "content"];
  const opts = { fields };

  return json2csv.parse(retweets, opts);
};

// Private
const isEmptyState = state => {
  return state === undefined || Object.keys(state).length <= 0;
};
