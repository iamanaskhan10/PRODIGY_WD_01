window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#2b140d"; // Change background color on scroll
  } else {
    navbar.style.backgroundColor = "#333";
  }
});

/* nav bar text*/
var menuItems = document.querySelectorAll("#navbar ul li a");

menuItems.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    this.style.color = "#df8161"; // Change font color on hover
  });

  item.addEventListener("mouseleave", function () {
    this.style.color = "#fff"; // Revert font color when not hovering
  });

  // Add click event listener to navigation items
  item.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    var sectionId = this.getAttribute("href").replace("#", ""); // Get the section ID from the href attribute e.g home removing # as id of section is home
    var section = document.getElementById(sectionId); // Get the section element
    section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section with a smooth animation
  });
});

// Intersection Observer for section animations
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

var sections = document.querySelectorAll("section");
sections.forEach(function (section) {
  observer.observe(section);
});
