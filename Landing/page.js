document.addEventListener("DOMContentLoaded", function () {
  const projectsLink = document.querySelector(
    'a[href="#projects"]',
    'b[href="#skills"]',
    'c[href="#about"]'
  );

  projectsLink.addEventListener("click", function (event) {
    event.preventDefault();
    const targetElement = document.getElementById("projects");

    if (targetElement) {
      const offset = targetElement.offsetTop;
      const duration = 700; // Adjust the duration (in milliseconds) as needed
      const startTime = performance.now();
      const startOffset =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      const scroll = function (timestamp) {
        const currentTime = timestamp - startTime;
        const easing = function (t) {
          return t < 0.5
            ? 4 * t * t * t
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }; // Easing function for smooth scrolling

        window.scrollTo(
          0,
          easing(currentTime / duration) * (offset - startOffset) + startOffset
        );

        if (currentTime < duration) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
