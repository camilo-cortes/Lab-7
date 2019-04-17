function init(){
document.getElementById("entrybutton").addEventListener("click", myFunction);
}

function myFunction() {
	alert("Camilo Cortes: " + document.getElementById("entryinput").value);
	document.getElementById("textoutput").innerHTML = document.getElementById("entryinput").value;
}

window.addEventListener('load', init);