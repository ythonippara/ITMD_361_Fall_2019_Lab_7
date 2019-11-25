function init(){
  //add your JavaScript between these two lines of code
  var button = document.getElementById('entrybutton');
  
  function showSomeText(){
    var texfield = document.getElementById('entryinput');
    textfield.value
    alert("Yulia Thonippara: " + textfield.value);
    document.getElementById('textoutput').innerHTML = textfield.value;
  }
  
  button.addEventListener('onclick', showSomeText);
}

window.addEventListener('onload', init);
