#pragma strict

static var eldialo : GameObject;

var eldial : GameObject;

var historia : GameObject;
var localizacion : GameObject;
var actividades : GameObject;

static var banner : GameObject[];

var lacosa : GameObject;


///////////////////////////Las palabras/////////////////////////
static var saludo : String;
static var locali : String;
static var histo : String;
static var activi : String;

static var dialogo : GameObject;
///////////////////////////////////Texto///////tomas es muy lindo <3////////////////
var saludoT : UI.Text;
var localiT : UI.Text;
var histoT : UI.Text;
var activiT : UI.Text;


function Start () {
eldialo=eldial;
banner = GameObject.FindGameObjectsWithTag("Banner");
for (var i : int = 0; i < banner.length; i++){
	banner[i].SetActive(false);
}

}

function Update () 
{
saludoT.text = saludo;
localiT.text = locali;
histoT.text = histo;
activiT.text = activi;

}

static function Desactivar (){
	eldialo.SetActive(false);
}
static function Activar (){
	eldialo.SetActive(true);
}

function AbrirH (){
	historia.SetActive(true);
}
function AbrirL (){
	localizacion.SetActive(true);
}
function AbrirA (){
	actividades.SetActive(true);
}
function CerrarH (){
	historia.SetActive(false);
}
function CerrarL (){
	localizacion.SetActive(false);
}
function CerrarA (){
	actividades.SetActive(false);
}

function Cerrar (){
	Destroy(lacosa);
}

/////////////#Masvalequeganemos//////////////////////////


////////Libertad al Frule///////////////////////