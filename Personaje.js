#pragma strict
static var marcador : Transform;
var nada : AnimationClip;
var caminar : AnimationClip;
var bailar : AnimationClip;

var abailar : float= 0;

var agent: UnityEngine.AI.NavMeshAgent;



function Start () {
	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();
	
}

function Update () {	
	var dist = Vector3.Distance(marcador.position, transform.position);
	agent.destination = marcador.position;

	if (dist < 8 && abailar < 7 ){
		GetComponent.<Animation>().Play(nada.name);	
		abailar += Time.deltaTime * 1;

	}else if (abailar >=  7){
		GetComponent.<Animation>().Play(bailar.name);
		Invoke("Enfruleo", 10);

	}else {
		GetComponent.<Animation>().Play(caminar.name);
		abailar = 0;
		Control.eldialo.SetActive(false);
	}
	
}

function Enfruleo (){
	abailar = 0;
}

