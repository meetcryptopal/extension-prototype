const CryptoJS = require("crypto-js");

export const encrypt = (msg, key) => CryptoJS.AES.encrypt(msg, key).toString();
export const decrypt = (msg, key) =>
  CryptoJS.AES.decrypt(msg, key).toString(CryptoJS.enc.Utf8);
