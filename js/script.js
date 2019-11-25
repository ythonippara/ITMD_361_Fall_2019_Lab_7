function init(){
  //add your JavaScript between these two lines of code
  var button = document.getElementByID('entrybutton');
  
  function showSomeText(){
    var texfield = document.getElementByID('entryinput');
    document.getElementByID('textoutput').innerHTML = textfield.value;
    alert("Yulia Thonippara: " + textfield.value);
  }
  
  button.addEventListener('click', showSomeText);
}

window.addEventListener('load', init);
