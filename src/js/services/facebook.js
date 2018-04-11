import $ from "jquery";
import store from "store";
import allPlugins from "store/plugins/all";

store.addPlugin(allPlugins);

const trackLikes = () => {
  // TODO: This should be filtered from manifest.json
  if (!location.href.toLowerCase().includes("facebook.com")) return;

  const FACEBOOK_LIKE_BUTTON_SELECTOR = ".UFILikeLink";

  $("body").on("click", FACEBOOK_LIKE_BUTTON_SELECTOR, e => {
    console.log("FACEBOOK LIKE DETECTED");
    const $likeBtn = $(e.target);

    const content = $likeBtn
      .closest(".userContentWrapper")
      .find(".userContent")
      .text();

    const likedPost = {
      content
    };

    console.log("FACEBOOK LIKED CONTENT: ", content);

    store.defaults({ facebook: { likedPosts: [] } });
    store.update("facebook", facebook => {
      facebook.likedPosts = [...facebook.likedPosts, likedPost];
    });
    console.log("FACEBOOK: ", store.get("facebook"));
  });
};

export default {
  trackLikes
};
