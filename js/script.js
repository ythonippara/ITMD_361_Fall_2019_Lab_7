function init(){
  //add your JavaScript between these two lines of code
  var button = document.getElementById('entrybutton');
  
  function showMeSomeText(){
    var texfield = document.getElementById('entryinput');
    alert("Yulia Thonippara: " + textfield.value);
    //document.getElementById('textoutput').innerHTML = textfield.value;
  }
  
  textfield.onclick = showMeSomeText;
  button.addEventListener('onclick', showMeSomeText);
}

window.addEventListener('onload', init);
