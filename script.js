document.querySelector(".navbar-toggle").addEventListener("click", function () {
    var links = document.querySelectorAll(".navbar-links");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle("active");
    }
  });

  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  
  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab")
    }
    addEventListener.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }