import $ from "jquery";
import _ from "lodash";

import { updateStore } from "../storage/store";

const STORE_KEY = "facebook";

const initState = { likedPosts: [] };
const reduceState = (state = initState, { type, payload }) => {
  switch (type) {
    case LIKED:
      return { ...state, likedPosts: [payload, ...state.likedPosts] };
  }
};

const dispatch = updateStore(STORE_KEY, reduceState, initState);

// Actions
const LIKED = "LIKED";

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

    const username = $likeBtn
      .closest(".userContentWrapper")
      .find(".fwb")
      .text();

    const href = $likeBtn
      .closest(".userContentWrapper")
      .find("._3ekx a")
      .attr("href");
    const anchorText = $likeBtn
      .closest(".userContentWrapper")
      .find("._6m3")
      .text();

    const likedPost = {
      content,
      username,
      href,
      anchorText
    };

    console.log("FACEBOOK LIKED USER: ", username);
    console.log("FACEBOOK LIKED CONTENT: ", content);
    console.log("FACEBOOK LIKED HREF: ", href);
    console.log("FACEBOOK LIKED ANCHOR TEXT: ", anchorText);

    dispatch({ type: LIKED, payload: likedPost });
  });
};

export default {
  trackLikes
};
