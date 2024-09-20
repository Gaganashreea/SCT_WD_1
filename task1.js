window.onscroll = function() {
  var navbar = document.getElementById("navbar");
  var sections = document.querySelectorAll('section');
  var currentSection = "";

  sections.forEach(section => {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
          currentSection = section.getAttribute("id");
      }
  });

  switch (currentSection) {
      case "home":
          navbar.style.backgroundColor = "#1F3A93"; 
          break;
      case "about":
          navbar.style.backgroundColor = "#52B2BF"; 
          break;
      case "services":
          navbar.style.backgroundColor = "#FF6F61"; 
          break;
      case "contact":
          navbar.style.backgroundColor = "#FFC107"; 
          break;
      default:
          navbar.style.backgroundColor = "#1F3A93"; 
          break;
  }
};

  
  
  
  