import $ from "jquery";

export default () => {
  // TODO: This should be filtered from manifest.json
  if (!location.href.toLowerCase().includes("facebook.com")) return;
  $(() => {
    // The page loads w/ JS, so can't rely on $(document).ready
    const asyncLoadInterval = window.setInterval(() => {
      console.log("attaching...");
      const $likeLinks = $("a.UFILikeLink").on("click", () => {
        console.log(`SOMEONE LIKED: ${$(this)}`);
      });

      if ($likeLinks.length > 0) {
        clearInterval(asyncLoadInterval);
        console.log("Cryptopal successfully injected.");
      }
    }, 1000);
  });
};
