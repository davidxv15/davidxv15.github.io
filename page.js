document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetElement = document.querySelector(this.getAttribute("href"));

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
            easing(currentTime / duration) * (offset - startOffset) +
              startOffset
          );

          if (currentTime < duration) {
            requestAnimationFrame(scroll);
          }
        };

        requestAnimationFrame(scroll);
      }
    });
  });

  const skillsLink = document.querySelector('a[href="#skills"]');

  skillsLink.addEventListener("click", function (event) {
    event.preventDefault();
    const targetElement = document.getElementById("skills");

    if (targetElement) {
      const offset = targetElement.offsetTop + 800; // to  skills section
      const duration = 700; // duration in milliseconds
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
        }; // for smooth scrolling

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
