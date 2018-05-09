import $ from "jquery";
import _ from "lodash";

const store = window.chrome.storage.sync;
const STORE_KEY = "twitter";

// Actions
const LIKED = "LIKED";
const RETWEET = "RETWEET";

const initState = { likedPosts: [], retweetedPosts: [] };
const reduceState = (state = initState, { type, payload }) => {
  switch (type) {
    case LIKED:
      return { ...state, likedPosts: [payload, ...state.likedPosts] };
    case RETWEET:
      return { ...state, retweetedPosts: [payload, ...state.retweetedPosts] };
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

const trackLikes = () => {
  const TWITTER_DOMAIN = "https://twitter.com/";

  const isTwitter = location.href.match(TWITTER_DOMAIN);

  if (!isTwitter) {
    return;
  }
  console.log("TWITTER DETECTED");

  const TWITTER_LIKE_BUTTON_SELECTOR =
    ".ProfileTweet-actionButton.js-actionFavorite";
  const TWITTER_RETWEET_BUTTON_SELECTOR = "button.retweet-action";
  const TWITTER_RETWEET_BUTTON_CONTAINER_SELECTOR = ".tweet-button";
  const TWITTER_RETWEET_BODY_SELECTOR = ".RetweetDialog-tweet";
  const TWITTER_POST_HEADER_SELECTOR = ".stream-item-header";
  const TWITTER_POST_FOOTER_SELECTOR = ".stream-item-footer";
  const TWITTER_POST_BODY_SELECTOR = ".js-tweet-text-container";
  const TWITTER_POST_USERNAME_SELECTOR = ".fullname";
  const TWITTER_POST_PROFILE_LINK_SELECTOR = ".js-user-profile-link";

  // retweeting
  $("body").on("click", TWITTER_RETWEET_BUTTON_SELECTOR, e => {
    const $retweetBtn = $(e.target);

    const $header = $retweetBtn
      .closest(TWITTER_RETWEET_BUTTON_CONTAINER_SELECTOR)
      .siblings(TWITTER_RETWEET_BODY_SELECTOR)
      .find(TWITTER_POST_HEADER_SELECTOR);
    const $body = $retweetBtn
      .closest(TWITTER_RETWEET_BUTTON_CONTAINER_SELECTOR)
      .siblings(TWITTER_RETWEET_BODY_SELECTOR)
      .find(TWITTER_POST_BODY_SELECTOR);

    const username = $header
      .find(".fullname")
      .text()
      .trim();
    const handle = $header
      .find(".username")
      .first()
      .text()
      .trim();
    const content = $body.text().trim();

    const retweetedPost = {
      content,
      username,
      handle
    };

    console.log("TWITTER RETWEETED USER NAME: ", username);
    console.log("TWITTER RETWEETED USER HANDLE: ", handle);
    console.log("TWITTER RETWEETED CONTENT: ", content);

    updateStore({ type: RETWEET, payload: retweetedPost });
  });

  // liking
  $("body").on("click", TWITTER_LIKE_BUTTON_SELECTOR, e => {
    const $likeBtn = $(e.target);

    const $header = $likeBtn
      .closest(TWITTER_POST_FOOTER_SELECTOR)
      .siblings(TWITTER_POST_HEADER_SELECTOR);
    const $body = $likeBtn
      .closest(TWITTER_POST_FOOTER_SELECTOR)
      .siblings(TWITTER_POST_BODY_SELECTOR);

    const username = $header
      .find(".fullname")
      .text()
      .trim();

    const handle = $header
      .find(".username")
      .first()
      .text()
      .trim();

    const content = $body.text().trim();

    const likedPost = {
      content,
      username,
      handle
    };

    console.log("TWITTER LIKED USER NAME: ", username);
    console.log("TWITTER LIKED USER HANDLE: ", handle);
    console.log("TWITTER LIKED CONTENT: ", content);

    updateStore({ type: LIKED, payload: likedPost });
  });
};

export default {
  trackLikes
};
