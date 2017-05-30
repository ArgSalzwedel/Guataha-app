#pragma strict
var personaje : Transform;

var valorx : int;
var valorz : int;
function Start () {
	
}

function Update () {
	transform.position.x = personaje.position.x +valorx;
	transform.position.z = personaje.position.z +valorz;
}
