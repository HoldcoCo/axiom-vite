/**
 * Scroll-reveal observer and smooth section scrolling helpers.
 */

/**
 * Attach IntersectionObserver-based reveal animations to [data-reveal] nodes.
 * @returns {IntersectionObserver | null} Observer instance for later disconnect.
 */
export function setupRevealObserver() {
  if (
    !("IntersectionObserver" in window) ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return null;
  }

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          io.unobserve(entry.target);
        }
      }),
    { rootMargin: "0px 0px -6% 0px" },
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    if (el.getBoundingClientRect().top < innerHeight) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = "opacity .7s ease, transform .7s ease";
    io.observe(el);
  });

  return io;
}

/**
 * Smooth-scroll to an element by id, revealing any nested [data-reveal] nodes.
 * @param {string} id
 * @param {number} [offset=68] Sticky header offset in pixels.
 */
export function scrollToSection(id, offset = 68) {
  const el = document.getElementById(id);
  if (!el) return;
  el.querySelectorAll("[data-reveal]").forEach((node) => {
    node.style.opacity = "1";
    node.style.transform = "none";
  });
  window.scrollTo({
    top: el.getBoundingClientRect().top + scrollY - offset,
    behavior: "smooth",
  });
}
