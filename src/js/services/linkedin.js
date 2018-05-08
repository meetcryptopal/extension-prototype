import $ from "jquery";
import _ from "lodash";

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
    const currentState = _.isEmpty(state) ? undefined : state;
    const nextState = reduceState(currentState, action);

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

  const name = $(LINKEDIN_NAME_CLASS)
    .text()
    .trim();
  const headline = $(LINKEDIN_HEADLINE_CLASS)
    .text()
    .trim();
  const profilePath = $(LINKEDIN_PROFILE_LINK_CLASS).attr("href");

  console.log("LINKEDIN NAME: ", name);
  console.log("LINKEDIN HEADLINE: ", headline);
  console.log("LINKEDIN PROFILE PATH: ", profilePath);

  updateStore({ type: FEED, payload: { name, headline, profilePath } });
};

const scrapeProfile = () => {
  store.get(STORE_KEY, state => {
    const profilePath = state.profilePath;

    if (location.pathname === profilePath) {
      const location = $("body")
        .find(".pv-top-card-section__location")
        .first()
        .text()
        .trim();

      updateStore({ type: PROFILE, payload: { location } });
      console.log("LINKEDIN LOCATION: ", location);
    }
  });
};

export default {
  scrapeFeed,
  scrapeProfile
};
