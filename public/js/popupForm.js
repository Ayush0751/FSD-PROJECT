function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  var slider1 = document.getElementById("stoploss-Range");
  var slider2 = document.getElementById("stopgain-Range");
var output1 = document.getElementById("per1");
var output2 = document.getElementById("per2");
output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
}