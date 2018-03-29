import $ from "jquery";

export default () => {
  // TODO: This should be filtered from manifest.json
  if (!location.href.toLowerCase().includes("facebook.com")) return;

  $(window).on("load", () => {
    $("body").on("click", ".UFILikeLink", e => {
      console.log("Liked something");
      console.log(JSON.stringify($(e.target)));
      const $likeBtn = $(e.target);
      const title = $likeBtn
        .closest(".userContentWrapper")
        .find("h5")
        .text();
      console.log(title);
    });
  });
};
