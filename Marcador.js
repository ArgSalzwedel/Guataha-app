#pragma strict
var anima : AnimationClip;
var yo : GameObject;

var dialogador : boolean = false;
var hablando : boolean = false;

var salud : String;
var loca : String;
var historia : String;
var acti : String;

var jugador : GameObject;

var elact : GameObject;



function Start () {
	yo = this.gameObject;
	jugador = GameObject.FindWithTag ("Jugador");
}

function Update () {
	GetComponent.<Animation>().Play(anima.name);
}


function OnMouseDown (){
	var dist = Vector3.Distance(jugador.transform.position, transform.position);
	if (dialogador == true && hablando == false && dist < 8){
		Control.saludo = salud;
		Control.locali = loca;
		Control.activi = acti;
		Control.histo = historia;
		Control.Activar();
		hablando = true;
	}else if (dialogador == true && hablando == true){
		Control.Desactivar();
		hablando = false;
	}
	Debug.Log(dist);
	Personaje.marcador = yo.transform;
	
}

function OnTriggerEnter (algo : Collider){
	if (algo.gameObject.tag == "Jugador" && dialogador == false){		
	Invoke("Volver",5);
	Invoke("Eso",15);
	elact = Control.banner[Random.Range(0,Control.banner.length)];
	elact.SetActive(true);
	yo.SetActive(false);
	}
}
function Volver (){
	yo.SetActive(true);
	
}

function Eso (){
	elact.SetActive(false);
}