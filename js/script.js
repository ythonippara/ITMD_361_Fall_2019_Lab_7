function init(){
  //add your JavaScript between these two lines of code
  
  var button = document.getElementById('entrybutton');
  
  function showConfirmationDialog() {
    var texfield = document.getElementById('entryinput');
    alert("Yulia Thonippara: " + textfield.value);
    document.getElementById('textoutput').innerHTML = textfield.value;
  }
  
  button.addEventListener('click', showConfirmationDialog);
  
}

window.addEventListener('load', init);
