import $ from "jquery";
import Raven from "raven-js";

import LinkedIn from "./services/linkedin";
import Shopify from "./services/shopify";
import Amazon from "./services/amazon";
import Twitter from "./services/twitter";
import Facebook from "./services/facebook";
import { loadPass } from "./storage/store";

Raven.config(
  "https://30f178f4606a43efb7a9d9a844909469@sentry.io/1217951"
).install();

const scrape = () => {
  Amazon.scrapeCartWhenProceedingToCheckout();
  Amazon.saveOnOrder();
  Amazon.saveOnOneClickPurchase();
  Shopify.scrapeCheckout();
  Shopify.saveOnOrder();

  Twitter.trackLikes();
  Facebook.trackLikes();
  LinkedIn.scrapeFeed();
  LinkedIn.scrapeProfile();
};

Raven.context(() => {
  $(function() {
    console.log("CRYPTOPAL LOADED");

    // on initial load + for full page refreshess
    $(window).on("load", () => {
      loadPass(pw => {
        scrape();
      });
    });
  });
});
