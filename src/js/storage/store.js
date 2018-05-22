import FileSaver from "file-saver";
import json2csv from "json2csv";

import { encrypt, decrypt } from "./encryption";

const ROOT_KEY = "ROOT-KEY";

// TODO: Make this dynamic.
const PW = "cryptopal";
const ERR_JSON = { error: "Incorrect Private Key" };

const store = window.chrome.storage.sync;

export const updateStore = (key, reducer, initState = {}) => action => {
  store.get(null, storedData => {
    // Decrypt.

    let encryptedData = storedData[ROOT_KEY];
    encryptedData = isEmptyState(encryptedData) ? "" : encryptedData;
    let state = decrypt(encryptedData, PW);
    state = isEmptyState(state) ? {} : JSON.parse(state);

    // Reduce state.
    const currState = isEmptyState(state[key]) ? initState : state[key];
    const nextState = reducer(currState, action);
    state[key] = nextState; // WARNING: Mutation!!!
    console.log(key, state);

    // Encrypt.
    const encryptedNextState = encrypt(JSON.stringify(state), PW);

    // Update store.
    store.set({ [ROOT_KEY]: encryptedNextState });
  });
};

const downloadJson = data => {
  data = isEmptyState(data) ? ERR_JSON : data;

  // Hack to prettify.
  data = JSON.stringify(data, null, 2);

  var dataBlob = new Blob([data], { type: "application/json" });
  FileSaver.saveAs(dataBlob, "cryptopal.json");
};

const fetchState = (key, cb, errCb) => {
  // TODO: DELETE THIS
  key = PW;

  store.get(null, storedData => {
    // Decrypt.
    let state;
    try {
      state = decrypt(storedData[ROOT_KEY], key);
      state = JSON.parse(state);
    } catch (error) {
      console.log("Decrypt error: ", error);
    }

    if (isEmptyState(state)) return errCb(state);
    return cb(state);
  });
};

export const downloadData = (key = "") => {
  fetchState(key, downloadJson, downloadJson);
};

// CSV
const downloadCsv = (data, filename) => {
  var dataBlob = new Blob([data], { type: "text/csv" });
  FileSaver.saveAs(dataBlob, `${filename}.csv`);
};

const fetchAndParse = (key, adapter, filename) =>
  fetchState(key, state => downloadCsv(adapter(state)), filename, downloadJson);

export const downloadAmazonOrders = (key = "") =>
  fetchAndParse(key, ordersCsv, "cryptopal-amazon.csv");
export const downloadBrowsing = (key = "") =>
  fetchAndParse(key, browsingCsv, "cryptopal-browsing-history.csv");
export const downloadShopifyOrders = (key = "") =>
  fetchAndParse(key, shopifyCsv, "cryptopal-shopify.csv");

// CSV Mapping
// TODO: Move this somewhere else?

const getState = (state, key) => (state && state[key]) || {};

const ordersCsv = state => {
  const orders = getState(state, "amazon").orders || [];
  const fields = ["name", "quantity", "price"];
  const opts = { fields };

  const data = orders.map(o => ({
    name: o.productName,
    quantity: o.productQuantity,
    price: o.productPrice
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

// Private
const isEmptyState = state => {
  return state == null || Object.keys(state).length <= 0;
};
