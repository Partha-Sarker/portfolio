/**
 * Utility functions for smooth scrolling
 */

/**
 * Scrolls to a specific element on the page with smooth behavior
 * @param elementId - The ID of the element to scroll to
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

/**
 * Scrolls to the top of the page with smooth behavior
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
