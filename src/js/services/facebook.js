import $ from "jquery";

export default () => {
  // TODO: This should be filtered from manifest.json
  if (!location.href.toLowerCase().includes("facebook.com")) return;
  $(() => {
    // The page loads w/ JS, so can't rely on $(document).ready
    const asyncLoadInterval = window.setInterval(() => {
      console.log("attaching!!...");
      const $likeLinks = $("a.UFILikeLink");

      if ($likeLinks.length > 0) {
        clearInterval(asyncLoadInterval);
        console.log("Cryptopal successfully injected.");

        $likeLinks.on("click", e => {
          const $this = $(this);
          console.log(JSON.stringify(this));
          console.log(JSON.stringify($this.text()));
          console.log(JSON.stringify($this.hasClass("UFILikeLink")));
          console.log("---------  ");
          const $contentWrapper = $this.closest(".userContentWrapper");
          const $title = $contentWrapper.find("h5");

          console.table($title);
          console.log($title.text());
        });
      }
    }, 1000);
  });
};
