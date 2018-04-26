import $ from "jquery";
import store from "store";
import allPlugins from "store/plugins/all";

store.addPlugin(allPlugins);

const STORE_KEY = "linkedin";

const initStore = () => {
  store.defaults({
    [STORE_KEY]: {
      name: null,
      headline: null,
      profilePath: null,
      location: null
    }
  });
};

const LINKEDIN_FEED_URL = "https://www.linkedin.com/feed/";

const scrapeFeed = () => {
  if (location.href !== LINKEDIN_FEED_URL) {
    return;
  }
  console.log("LINKEDIN FEED DETECTED");

  const LINKEDIN_NAME_CLASS = ".feed-identity-module__actor-link";
  const LINKEDIN_HEADLINE_CLASS = ".identity-headline";
  const LINKEDIN_PROFILE_LINK_CLASS = ".profile-rail-card__actor-link";

  const name = $(LINKEDIN_NAME_CLASS).text();
  const headline = $(LINKEDIN_HEADLINE_CLASS).text();
  const profilePath = $(LINKEDIN_PROFILE_LINK_CLASS).attr("href");

  console.log("LINKEDIN NAME: ", name);
  console.log("LINKEDIN HEADLINE: ", headline);
  console.log("LINKEDIN PROFILE PATH: ", profilePath);

  initStore();
  store.update("linkedin", linkedin => {
    linkedin.name = name;
    linkedin.headline = headline;
    linkedin.profilePath = profilePath;
  });
  console.log("LINKEDIN: ", store.get("linkedin"));
};

const scrapeProfile = () => {
  initStore();
  const profilePath = store.get(STORE_KEY).profilePath;

  if (location.pathname === profilePath) {
    const location = $("body")
      .find(".pv-top-card-section__location")
      .first()
      .text()
      .trim();

    initStore();
    store.update(STORE_KEY, linkedin => {
      linkedin.location = location;
    });
    console.log("LINKEDIN: ", store.get(STORE_KEY));
  }
};

export default {
  scrapeFeed,
  scrapeProfile
};
