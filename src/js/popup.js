import Raven from "raven-js";
import React from "react";
import { render } from "react-dom";

import "../css/popup.css";
import Greeting from "./popup/greeting_component.jsx";

Raven.config(
  "https://30f178f4606a43efb7a9d9a844909469@sentry.io/1217951"
).install();

Raven.context(() => {
  render(<Greeting />, window.document.getElementById("app-container"));
});
