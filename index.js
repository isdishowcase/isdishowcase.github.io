//Function for Side bar
function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "60px";
    document.getElementById("logo").style.width = "6vw";
  } else {
    document.getElementById("navbar").style.height = "90px";
    document.getElementById("logo").style.width = "8vw";
  }
}
