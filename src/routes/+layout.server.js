import posthog from "posthog-js";
import { browser } from "$app/environment";

export const load = async () => {
  if (browser) {
    posthog.init("phc_gEdBJAu2D8VFNxNlKvInHGOLagQXKSOB6fIu0XaEiYb", {
      api_host: "https://eu.i.posthog.com",
      persistence: "memory",
      disable_cookie: true,
      disable_persistence: false,
      capture_pageview: false,
      capture_pageleave: false,
    });
  }
  return {};
};
