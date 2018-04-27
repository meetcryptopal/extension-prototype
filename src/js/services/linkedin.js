import $ from "jquery";

const store = window.chrome.storage.sync;
const STORE_KEY = "linkedin";

// Actions
const FEED = "FEED";
const PROFILE = "PROFILE";

const initState = {
  name: null,
  headline: null,
  profilePath: null,
  location: null
};
const reduceState = (state = initState, { type, payload }) => {
  switch (type) {
    case FEED:
    case PROFILE:
      return { ...state, ...payload };
  }
};

const updateStore = action => {
  store.get(STORE_KEY, state => {
    const nextState = reduceState(state, action);

    store.set({ [STORE_KEY]: nextState });
    console.log(`${STORE_KEY}: `, nextState);
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

  updateStore({ type: LIKED, payload: { name, headline, profilePath } });
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

    updateStore({ type: LIKED, payload: { location } });
  }
};

export default {
  scrapeFeed,
  scrapeProfile
};
