function init(){
  //add your JavaScript between these two lines of code
  
  textfield.addEventListener('click', showMeSomeText);
  button.addEventListener('click', alertButton);
  
  function showMeSomeText() {
    var texfield = document.getElementById('entryinput');
    alert("Yulia Thonippara: " + textfield.value);
  }
  
  function alertButton() {
    var button = document.getElementById('entrybutton');
    document.getElementById('textoutput').innerHTML = textfield.value;
  }
}

window.addEventListener('onload', init);
