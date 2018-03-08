/*****************************************************************
**																**
**		Nom		:Neto Gonçalves									**
**		Prenom	:Victor											**
**		Date  	:18 Octobre 2013								**
**		Classe	:I.IN_P3A										**
**																**
*****************************************************************/

var varAddHere="";

function add() {
	document.getElementById('addhere').innerHTML='';
	varAddHere += "<li>" + document.getElementById('task').value + "</li>";
	document.getElementById('addhere').innerHTML=varAddHere;
}