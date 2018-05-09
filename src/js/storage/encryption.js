const CryptoJS = require("crypto-js");

export const encrypt = (msg, key) => CryptoJS.AES.encrypt(msg, key).toString();
export const decrtypt = (msg, key) =>
  CryptoJS.AES.decrypt(msg, key).toString(CryptoJS.enc.Utf8);
