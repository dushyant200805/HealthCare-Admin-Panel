import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import $ from "jquery";

// Shared selectors config
const scrollSelectors = [
  { selector: "#menu" },
  { selector: "#messagelistslide" },
  { selector: "#grouplistslide" },
  { selector: ".codeboxss" },
  { selector: "#taskList" },

  // Existing
  { selector: "#notification" },
  { selector: "#chat-one-slim", options: { start: "bottom" } },
  { selector: "#chat-two-slim", options: { start: "bottom" } },
  { selector: "#chat-list-slim", options: { start: "bottom" } },
  {
    selector: "[data-id='primepanel-chat']",
    options: { start: "bottom" },
  },
  { selector: "#menubox-list" },
  { selector: "#chatmain-list" },
  { selector: "#chatmain-list-slim", options: { start: "bottom" } },
  { selector: "#listContainer" },
  { selector: "#taskinhand" },

  // Added new selectors
  { selector: "#recent_activity" },
  { selector: "#notification-side" },
  { selector: "#sidebar-data" },
  { selector: "#top_department" },
  { selector: "#message_box" },
  { selector: "#notification_box" },
  { selector: "#pat_notes" },
  { selector: "#schedule-box" },
  { selector: "#activity_box" },
  { selector: "#speciality_box" },
  { selector: "#pat-scroll" },
  { selector: "#operation_main" },
];

// Helper to initialize slimScroll on all selectors
const applySlimScroll = () => {
  if (!$.fn.slimScroll) {
    console.warn("slimScroll plugin not loaded");
    return;
  }

  scrollSelectors.forEach(({ selector, options = {} }) => {
    if ($(selector).length > 0) {
      try {
        // Destroy previous instance if exists
        $(selector).slimScroll({ destroy: true });
        $(selector).attr("style", "");

        // Initialize new slimScroll
        $(selector).slimScroll(options);
      } catch (error) {
        console.error(
          `Failed to initialize slimScroll on ${selector}`,
          error,
        );
      }
    }
  });
};

// Helper to destroy slimScroll on all selectors
const destroySlimScroll = () => {
  scrollSelectors.forEach(({ selector }) => {
    if ($(selector).length > 0 && $.fn.slimScroll) {
      try {
        $(selector).slimScroll({ destroy: true });
      } catch (error) {
        console.error(`Cleanup failed for ${selector}`, error);
      }
    }
  });
};

// Custom Hook — re-initializes on every route change
export const useSlimScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to let the new page's DOM render via <Outlet />
    const timer = setTimeout(() => {
      applySlimScroll();
    }, 200);

    // Cleanup on unmount or before next run
    return () => {
      clearTimeout(timer);
      destroySlimScroll();
    };
  }, [pathname]); // Re-run whenever the route changes
};

// Direct Function (kept for manual usage if needed)
export const initSlimScroll = applySlimScroll;
