document.querySelector(".navbar-toggle").addEventListener("click", function () {
    var links = document.querySelectorAll(".navbar-links");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle("active");
    }
  });

  // let tablinks = document.getElementsByClassName("tab-links");
  // let tabcontents = document.getElementsByClassName("tab-contents");
  
  // function opentab(tabname){
  //   for(tablink of tablinks){
  //     tablink.classList.remove("active-link")
  //   }
  //   for(tabcontent of tabcontents){
  //     tabcontent.classList.remove("active-tab")
  //   }
  //   event.currentTarget.classList.add("active-link")
  //   document.getElementById(tabname).classList.add("active-tab");
  // } 

// function opentab(evt, tabHead){
//   let tabcontents = document.getElementsByClassName("tab-contents");
//   for (i=0; i < tabcontents.length; i++) {
//     tabcontents[i].style.display = "none"
//   }

//   let tablinks = document.getElementsByClassName("tab-links")
//   for (i=0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.add("active-tab")
//   }

//   document.getElementsByClassName(tabHead).style.display = "block";
//   evt.currentTarget.className += "active-link"
// }
