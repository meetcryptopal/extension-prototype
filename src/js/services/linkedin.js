import $ from "jquery";

const scrapeFeed = () => {
  console.log("LINKEDIN FEED DETECTED");

  const LINKEDIN_NAME_CLASS = ".feed-identity-module__actor-link";
  const LINKEDIN_HEADLINE_CLASS = ".identity-headline";
  const LINKEDIN_PROFILE_LINK_CLASS = ".profile-rail-card__actor-link";

  const name = $(LINKEDIN_NAME_CLASS).text();
  const headline = $(LINKEDIN_HEADLINE_CLASS).text();
  const profilePath = $(LINKEDIN_PROFILE_LINK_CLASS).attr("href");

  console.log("LINKEDIN NAME: ", name);
  console.log("LINKEDIN HEADLINE: ", headline);
  console.log("LINKEDIN PROFILE PATH: ", profilePath);
};

// const scrapeProfile = profilePath => {
// if (location.pathname !== profilePath) {
// console.log("LOCATION.PATHNAME: ", location.pathname);
// console.log("profilePath", profilePath);
// return;
// }
// console.log("LINKEDIN PROFILE DETECTED");

// const LINKEDIN_JOB_SECTION_CLASS = ".pv-profile-section__sortable-card-item";
// const LINKEDIN_JOB_SUMMARY_CLASS = ".pv-entity__summary-info";

// const currentJob = $(LINKEDIN_JOB_SECTION_CLASS).first();
// // This is the position, company, dates, location all jumbled together
// const jobSummary = currentJob.find(LINKEDIN_JOB_SUMMARY_CLASS).text();

// console.log("LINKEDIN JOB SUMMARY: ", jobSummary);
// };

export default {
  scrapeFeed
  // scrapeProfile
};
