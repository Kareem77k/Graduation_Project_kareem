


/*
 ** Animate Width On Scrolling
 ** Video URL: https://youtu.be/sbIoIKI9FOc
 */

/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 50) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } 
  
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop)  {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
  
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


// انتظر حتى يتم تحميل المحتوى
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTopBtn");

  // عرض زر Scroll To Top عند التمرير إلى الأسفل
  window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  });

  // التمرير إلى الأعلى عند النقر على الزر
  scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});



