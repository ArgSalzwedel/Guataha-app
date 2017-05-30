#pragma strict


var marca : Transform;


var punto1 : GameObject;
var punto2 : GameObject;

var agent: UnityEngine.AI.NavMeshAgent;

function Start () {
	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();
}

function Update () {
	agent.destination = marca.position;
}
function OnTriggerEnter (algo : Collider){
	if (algo.gameObject.tag == "Punto1"){
		marca = punto2.transform;
	}
	if (algo.gameObject.tag == "Punto2"){
		marca = punto1.transform;
	}
}