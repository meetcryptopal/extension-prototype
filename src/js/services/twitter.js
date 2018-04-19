import $ from "jquery";
import store from "store";
import allPlugins from "store/plugins/all";

store.addPlugin(allPlugins);

const STORE_KEY = "twitter";

const initStore = () => {
  store.defaults({ [STORE_KEY]: { likedPosts: [], retweetedPosts: [] } });
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

    const username = $header.find(".fullname").text();
    const content = $body.text();

    const retweetedPost = {
      content,
      username
    };

    console.log("TWITTER RETWEETED USER: ", username);
    console.log("TWITTER RETWEETED CONTENT: ", content);

    initStore();
    store.update(STORE_KEY, twitter => {
      twitter.retweetedPosts = twitter.retweetedPosts || [];
      twitter.retweetedPosts = [...twitter.retweetedPosts, retweetedPost];
    });
    console.log("TWITTER: ", store.get("twitter"));
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
    const content = $body.text().trim();

    const likedPost = {
      content,
      username
    };

    console.log("TWITTER LIKED USER: ", username);
    console.log("TWITTER LIKED CONTENT: ", content);

    initStore();
    store.update(STORE_KEY, twitter => {
      twitter.likedPosts = twitter.likedPosts || [];
      twitter.likedPosts = [...twitter.likedPosts, likedPost];
    });
    console.log("TWITTER: ", store.get("twitter"));
  });
};

export default {
  trackLikes
};
