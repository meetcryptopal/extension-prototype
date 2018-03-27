(() => {
  // Only valid for facebook.
  // TODO: Do this in manifest.json instead.
  if (!location.href.toLowerCase().includes("facebook.com")) return;

  console.log("INSIDE FACEBOOK 2");
})();
