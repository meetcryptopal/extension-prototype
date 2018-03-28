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
