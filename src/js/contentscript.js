import $ from "jquery";
import LinkedIn from "./services/linkedin";
import facebook from "./services/facebook";

// TODO: This should be bound from manifest.json.
// I need fuzzy matching. the FB service will be responsible for only running
// when it's needed.
const scrape = () => {
  facebook();
  LinkedIn.scrapeFeed();
  // LinkedIn.scrapeProfile();
};

$(function() {
  console.log("CRYPTOPAL LOADED");

  // on initial load + for full page refreshess
  $(window).on("load", () => {
    scrape();
  });

  // for JS rendered views + routes
  // const body = document.querySelector("body");
  // let currentHref = location.href;
  // const observer = new MutationObserver(mutations => {
  // if (currentHref !== location.href) {
  // currentHref = location.href;
  // scrape();
  // }
  // });
  // observer.observe(body, { childList: true, subtree: true });
});
