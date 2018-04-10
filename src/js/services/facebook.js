import $ from "jquery";
import store from "store";
import allPlugins from "store/plugins/all";

store.addPlugin(allPlugins);
store.defaults({ facebook: {} });

export default () => {
  // TODO: This should be filtered from manifest.json
  if (!location.href.toLowerCase().includes("facebook.com")) return;

  const FACEBOOK_LIKE_BUTTON_SELECTOR = ".UFILikeLink";

  $("body").on("click", FACEBOOK_LIKE_BUTTON_SELECTOR, e => {
    console.log("FACEBOOK LIKE DETECTED");
    const $likeBtn = $(e.target);
    const title = $likeBtn
      .closest(".userContentWrapper")
      .find("h5")
      .text();

    const likedPost = {
      title
    };

    store.update("facebook", facebook => {
      facebook.likedPosts = facebook.likedPosts || [];
      facebook.likedPosts = [...facebook.likedPosts, likedPost];
    });
    console.log("FACEBOOK: ", store.get("facebook"));
  });
};
