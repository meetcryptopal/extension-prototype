import $ from "jquery";
import LinkedIn from "./services/linkedin";
import Shopify from "./services/shopify";
import Amazon from "./services/amazon";
import Twitter from "./services/twitter";
import Facebook from "./services/facebook";

const scrape = () => {
  Amazon.scrapeCart();
  Amazon.saveOnOrder();
  Shopify.scrapeCheckout();
  Shopify.saveOnOrder();

  Twitter.trackLikes();
  Facebook.trackLikes();
  LinkedIn.scrapeFeed();
  LinkedIn.scrapeProfile();
};

$(function() {
  console.log("CRYPTOPAL LOADED");

  // on initial load + for full page refreshess
  $(window).on("load", () => {
    scrape();
  });
});
