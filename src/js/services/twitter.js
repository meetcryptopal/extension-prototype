import $ from "jquery";

const trackLike = () => {
  const TWITTER_DOMAIN = "https://twitter.com/";

  const isTwitter = location.href.match(TWITTER_DOMAIN);

  if (!isTwitter) {
    return;
  }
  console.log("TWITTER DETECTED");

  const TWITTER_LIKE_BUTTON_SELECTOR =
    ".ProfileTweet-actionButton.js-actionFavorite";
  const TWITTER_POST_HEADER_SELECTOR = ".stream-item-header";
  const TWITTER_POST_FOOTER_SELECTOR = ".stream-item-footer";
  const TWITTER_POST_BODY_SELECTOR = ".js-tweet-text-container";
  const TWITTER_POST_USERNAME_SELECTOR = ".fullname";
  const TWITTER_POST_PROFILE_LINK_SELECTOR = ".js-user-profile-link";

  $("body").on("click", TWITTER_LIKE_BUTTON_SELECTOR, e => {
    const $likeBtn = $(e.target);

    const $header = $likeBtn
      .closest(TWITTER_POST_FOOTER_SELECTOR)
      .siblings(TWITTER_POST_HEADER_SELECTOR);
    const $body = $likeBtn
      .closest(TWITTER_POST_FOOTER_SELECTOR)
      .siblings(TWITTER_POST_BODY_SELECTOR);

    const username = $header.find(TWITTER_POST_USERNAME_SELECTOR).text();
    const profileLink = $header
      .find(TWITTER_POST_PROFILE_LINK_SELECTOR)
      .attr("href");
    const content = $body.text();

    console.log(content);
    console.log(username);
    console.log(profileLink);
  });
};

export default {
  trackLike
};
