// LinkedIn feed
const LINKEDIN_HEADLINE_CLASS = ".identity-headline";
const LINKEDIN_PROFILE_LINK_CLASS = ".profile-rail-card__actor-link";

const ScrapeLinkedInFeed = () => {
  console.log("LINKEDIN FEED DETECTED");

  const headline = $(LINKEDIN_HEADLINE_CLASS).text();
  const profilePath = $(LINKEDIN_PROFILE_LINK_CLASS).attr("href");

  console.log("LINKEDIN HEADLINE: ", headline);
  console.log("LINKEDIN PROFILE PATH: ", profilePath);
};

// routes
const LINKEDIN_FEED_URL = "https://www.linkedin.com/feed/";

const ROUTE_ACTIONS = {
  [LINKEDIN_FEED_URL]: ScrapeLinkedInFeed
};

$(function() {
  console.log("CRYPTOPAL LOADED");
  const action = ROUTE_ACTIONS[location.href];
  action ? action() : null;
});
