
var slideIndex = 1;

 
function social(){
  if($("#social-trading").css("display") === "none"){
    $("#social-trading").css("display","block");
    $(".shift-btn2").css("border-bottom","2px solid #0095EB");
    $(".shift-btn1").css("border-bottom","0px");
    $("#copy-trading").css("display","none");
    
  }
  // else{
    //   $("#social-trading").css("display","block");
    //   $("#copy-trading").css("display","none");
    // }
  }
  
  
  function copy(){
    if($("#copy-trading").css("display") === "none"){
    $(".shift-btn1").css("border-bottom","2px solid #0095EB");
    $(".shift-btn2").css("border-bottom","0px");
    $("#copy-trading").css("display","block");
    $("#social-trading").css("display","none");
  }
  // else{
  //   $("#copy-trading").css("display","block");
  //   $("#social-trading").css("display","none");
  // }
}


// var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

  function showSlides(n) {
  // var slideIndex = 1;
  var i;  
  var slides = document.getElementsByClassName("monial-text");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block";
} 


var slideIndex= 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("monial-text");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
} 


