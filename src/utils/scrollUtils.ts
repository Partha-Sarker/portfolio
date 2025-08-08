/**
 * Utility functions for smooth scrolling
 */

/**
 * Scrolls to a specific element on the page with smooth behavior
 * @param elementId - The ID of the element to scroll to
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

/**
 * Scrolls to the top of the page with smooth behavior
 */
export const scrollToTop = (): void => {
  const body = document.getElementById("root");

  if (!body) {
    return;
  }

  const header = document.getElementsByTagName("header");
  const offset = header[0]?.getBoundingClientRect()?.height || 65;

  body.scrollTo({
    top: -offset,
    behavior: "smooth",
  });
};
