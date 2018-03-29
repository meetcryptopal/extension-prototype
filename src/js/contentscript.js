import $ from "jquery";
import LinkedIn from "./services/linkedin";
import facebook from "./services/facebook";

// TODO: This should be bound from manifest.json.
// I need fuzzy matching. the FB service will be responsible for only running
// when it's needed.
facebook();

// routes
const LINKEDIN_FEED_URL = "https://www.linkedin.com/feed/";

const ROUTE_ACTIONS = {
  [LINKEDIN_FEED_URL]: LinkedIn.scrapeFeed
};

$(function() {
  console.log("CRYPTOPAL LOADED");
  const action = ROUTE_ACTIONS[location.href];
  action ? action() : null;
});
