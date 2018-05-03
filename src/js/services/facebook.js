import $ from "jquery";

const store = window.chrome.storage.sync;
const STORE_KEY = "facebook";

// Actions
const LIKED = "LIKED";

const initState = { likedPosts: [] };
const reduceState = (state = initState, { type, payload }) => {
  switch (type) {
    case LIKED:
      return { ...state, likedPosts: [payload, ...state.likedPosts] };
  }
};

const updateStore = action => {
  store.get(STORE_KEY, state => {
    const nextState = reduceState(state, action);

    store.set({ [STORE_KEY]: nextState });
    console.log(`${STORE_KEY}: `, nextState);
  });
};

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

    updateStore({ type: LIKED, payload: likedPost });
  });
};

export default {
  trackLikes
};
