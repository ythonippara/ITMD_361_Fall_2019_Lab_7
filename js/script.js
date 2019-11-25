function init(){
  //add your JavaScript between these two lines of code
  
  var button = document.getElementById('entrybutton');
  
  button.addEventListener('click', showMeSomeText);
  
  function showMeSomeText() {
    var texfield = document.getElementById('entryinput');
    alert("Yulia Thonippara: " + textfield.value);
    document.getElementById('textoutput').innerHTML = textfield.value;
  }
  
}

window.addEventListener('load', init);
