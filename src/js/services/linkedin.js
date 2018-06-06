import $ from "jquery";
import _ from "lodash";

import {
  updateStore,
  store,
  fetchState,
  checkOrGenPass
} from "../storage/store";

const STORE_KEY = "linkedin";

const initState = {
  name: null,
  headline: null,
  profilePath: null,
  location: null
};
const reduceState = (state, { type, payload }) => {
  switch (type) {
    case FEED:
    case PROFILE:
      return { ...state, ...payload };
  }
};

const dispatch = updateStore(STORE_KEY, reduceState, initState);

// Actions
const FEED = "FEED";
const PROFILE = "PROFILE";

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

  dispatch({ type: FEED, payload: { name, headline, profilePath } });
};

const scrapeProfile = () => {
  checkOrGenPass(pw => {
    fetchState(pw, state => {
      const profilePath = state[STORE_KEY] && state[STORE_KEY].profilePath;

      if (!!profilePath && location.pathname === profilePath) {
        const location = $("body")
          .find(".pv-top-card-section__location")
          .first()
          .text()
          .trim();

        dispatch({ type: PROFILE, payload: { location } });
        console.log("LINKEDIN LOCATION: ", location);
      }
    });
  });
};

export default {
  scrapeFeed,
  scrapeProfile
};
