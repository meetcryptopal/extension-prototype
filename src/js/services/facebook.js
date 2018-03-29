import $ from "jquery";

export default () => {
  // TODO: This should be filtered from manifest.json
  if (!location.href.toLowerCase().includes("facebook.com")) return;

  $(window).on("load", () => {
    $("body").on("click", ".UFILikeLink", e => {
      console.log("LIKE BUTTON CLICKEDZZZZ");
      const comment = $(e.target)
        .closest("div.UFICommentContentBlock")
        .find(".UFICommentBody")
        .text();
      console.log(comment);
    });
  });
};
