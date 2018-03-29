import $ from "jquery";

export default () => {
  // TODO: This should be filtered from manifest.json
  if (!location.href.toLowerCase().includes("facebook.com")) return;
  console.log("FACEBOOK");

  console.log($);
};
