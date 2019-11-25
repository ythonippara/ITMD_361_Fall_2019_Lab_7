function init(){
  //add your JavaScript between these two lines of code
  
  button.addEventListener('click', showMeSomeText);
  
  function showMeSomeText() {
    var texfield = document.getElementById('entryinput');
    var button = document.getElementById('entrybutton');
    alert("Yulia Thonippara: " + textfield.value);
    document.getElementById('textoutput').innerHTML = textfield.value;
  }
  
}

window.addEventListener('load', init);
