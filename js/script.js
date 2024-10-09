document.addEventListener("DOMContentLoaded", function () {
  var backToTop = document.getElementById("back-to-top");

  backToTop.addEventListener("click", function (event) {
    event.preventDefault();

    smoothScrollToTop();
  });
});

function smoothScrollToTop() {
  var currentPosition = window.scrollY;
  var targetPosition = 0;
  var duration = 2000;

  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var ease = easeInOutQuad(
      timeElapsed,
      currentPosition,
      targetPosition - currentPosition,
      duration
    );
    window.scrollTo(0, ease);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

//

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".next-b");
  const buttons = document.querySelectorAll(".nextSectionButton");

  buttons.forEach(button => {
      button.addEventListener("click", event => {
          event.preventDefault();
          const currentSection = button.closest("section.next-b");
          const nextIndex = Array.from(sections).indexOf(currentSection) + 1;
          if (nextIndex < sections.length) smoothScrollTo(sections[nextIndex]);
      });
  });

  function smoothScrollTo(target) {
      const startPosition = window.pageYOffset;
      const targetPosition = target.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime = null;

      function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
  }
});