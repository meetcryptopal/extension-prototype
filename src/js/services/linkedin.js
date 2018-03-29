import $ from "jquery";

const scrapeFeed = () => {
  console.log("LINKEDIN FEED DETECTED");

  const LINKEDIN_HEADLINE_CLASS = ".identity-headline";
  const LINKEDIN_PROFILE_LINK_CLASS = ".profile-rail-card__actor-link";

  const headline = $(LINKEDIN_HEADLINE_CLASS).text();
  const profilePath = $(LINKEDIN_PROFILE_LINK_CLASS).attr("href");

  console.log("LINKEDIN HEADLINE: ", headline);
  console.log("LINKEDIN PROFILE PATH: ", profilePath);
};

export default {
  scrapeFeed
};
