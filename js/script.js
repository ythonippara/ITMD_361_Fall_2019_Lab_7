function init() {
  //add your JavaScript between these two lines of code
  
  document.getElementById("entrybutton").addEventListener("click", showConfirmationDialog);
  
  function showConfirmationDialog() {
    var texfield = document.getElementById("entryinput");
    alert("Yulia Thonippara: " + textfield.value);
    document.getElementById("textoutput").innerHTML = textfield.value;
  }
}

window.addEventListener("load", init);
