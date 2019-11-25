function init(){
  //add your JavaScript between these two lines of code
  var button = document.getElementById('entrybutton');
  
  function showSomeText(){
    var texfield = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textfield.value;
    alert("Yulia Thonippara: " + textfield.value);
  }
  
  button.addEventListener('click', showSomeText);
}

window.addEventListener('onload', init);
