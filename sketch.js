
// Programado por Nic Motta
// 2021
// MURU7.8

// Configuracion navegacion nodos
let nuevoX;
let nuevoY;
let boxSize = 30;
let xOffset = 0.0;
let yOffset = 0.0;
let apretado = false;

// Configuracion texto de nodos
let xTexto = 130;
let yTexto = 40;
let tamañoTexto = 150;

// Texto inicial - pregunta
let textoInicial = "¿Esto es una pregunta? Esto es una pregunta.";

// Footer
let footer = "MURU 7.8 | Respir0 Namiki | v 0.1.0 | 2021";


// Definir cada objeto con su informacion correspondiente, posicion en X, Y, offset, texto, color, etc
var nicMotta = {
              nombre:"Nic Motta", 
              ciudad:"San Fernando", 
              provincia:"Buenos Aires", 
              pais:"Argentina",
              coordenadas: "",
              valorCo2: 400,
              texto: "",
              posicionX: -200,
              posicionY: -300,
              valorMap: 0,
              };

var claudiaValente = {
                nombre:"Claudia Valente", 
                ciudad:"Jose C. Paz", 
                provincia:"Buenos Aires", 
                pais:"Argentina",
                coordenadas: 500,
                posicionX: 100,
                posicionY: 200,
                };

var leandroBarbeito = {
                nombre:"Leandro Barbeito", 
                ciudad:"Lomas del Mirador", 
                provincia:"Buenos Aires", 
                pais:"Argentina",
                coordenadas: 280,
                posicionX: 500,
                posicionY: 500,
                };

var lupitaChavez = {
                nombre:"Lupita Chavez", 
                ciudad:"Tepic", 
                provincia:"Nayarit", 
                pais:"Mexico",
                coordenadas: "",
                valorCo2: 150,
                texto: "",
                posicionX: -500,
                posicionY: 600,
                };

function setup() {
  createCanvas(windowWidth, windowHeight);
  nuevoX = width / 2.0;
  nuevoY = height / 2.0;
  rectMode(CENTER);
  strokeWeight(2);
  textLeading(18); // Espacio entre lineas de texto
  textFont("MuseoModerno");
  
  textAlign(CENTER);
 
  // Modelos de cada persona
  nicMottaModel = createSprite(100, 100);
  nicMottaModel.addAnimation('normal', 'assets/modeloAchira.gif');
  nicMottaModel.scale = 0.2;
  nicMottaModel.mouseActive = true;

  claudiaValenteModel = createSprite(100, 100);
  claudiaValenteModel.addAnimation('normal', 'assets/modeloSemilla.gif');
  claudiaValenteModel.scale = 0.5;
  claudiaValenteModel.mouseActive = true;

  setInterval(numeroRandom, 1000);


    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB72EJgyU1K8SAuNPgRtoaOJywraSFNByY",
      authDomain: "respir0-namiki.firebaseapp.com",
      databaseURL: "https://respir0-namiki-default-rtdb.firebaseio.com",
      projectId: "respir0-namiki",
      storageBucket: "",
      messagingSenderId: ""
  }
    firebase.initializeApp(config); 
    database = firebase.database();
    
    var ref = database.ref('usuarios');
    ref.on('value', gotData, errData);
  
  }
  
  function gotData (data) {
      //console.log(data.val());
    var usuarios = data.val();
      var keys = Object.keys(usuarios);
      //console.log(keys);
    
    for (var i = 0; i < keys.length; i++) {
      var nombres = keys[i];
        var co2 = usuarios[nombres].nombre;
        //console.log(nombres + " / " + co2);	
          
      }
    console.log(usuarios[keys[2]].co2);
    nicMotta.valorCo2 = usuarios[keys[2]].co2;
    console.log(nicMotta.valorCo2);
  }
  
  function errData(err) {
    console.log('Error!');
      console.log(err);
  }



function draw() {
    background(10);
    stroke(80);
    noFill();
    ellipse(nicMotta.posicionX + nuevoX, nicMotta.posicionY + nuevoY, 500);
    ellipse(claudiaValente.posicionX + nuevoX, claudiaValente.posicionY + nuevoY, 500);

    noStroke();

    // Centro de espacio virtual - pregunta
    text(textoInicial, nuevoX, nuevoY, tamañoTexto, tamañoTexto)
    


    // Colores semaforo para CO2
    nicMotta.valorMap = map(nicMotta.valorCo2, 400, 10000, 0, 255);
    fill(nicMotta.valorMap, 120, 0, 100);
    ellipse(nicMotta.posicionX + nuevoX, nicMotta.posicionY + nuevoY, 100);
    //rect(nicMotta.posicionX + nuevoX, nicMotta.posicionY + nuevoY, 100);



    fill(200);

    // Footer informacion MURU 7.8
    textStyle(NORMAL);
    textSize(12);
    text(footer, windowWidth / 2, windowHeight - 10);



    // Centro de espacio virtual - pregunta
    textStyle(BOLD);
    textSize(18)
    text(textoInicial, nuevoX, nuevoY, tamañoTexto + 180, tamañoTexto)

    


    // Nodos dibujados
    textStyle(NORMAL)
    textSize(15)
    //ellipse(nicMotta.posicionX + nuevoX, nicMotta.posicionY + nuevoY, boxSize);
    text(nicMotta.nombre + "\n" + nicMotta.ciudad + "\n" + nicMotta.provincia + "\n" + nicMotta.pais + "\n" + "Valor Co2: " + nicMotta.valorCo2,
         nicMotta.posicionX + nuevoX + xTexto, nicMotta.posicionY + nuevoY + yTexto,
         tamañoTexto, tamañoTexto
         );
    //line(nicMotta.posicionX, nicMotta.posicionY, claudiaValente.posicionX, nicMotta.posicionY);

    text(claudiaValente.nombre + "\n" + claudiaValente.ciudad + "\n" + claudiaValente.provincia + "\n" + claudiaValente.pais, claudiaValente.posicionX + nuevoX + xTexto, claudiaValente.posicionY + nuevoY + yTexto, tamañoTexto, tamañoTexto)

    ellipse(leandroBarbeito.posicionX + nuevoX, leandroBarbeito.posicionY + nuevoY, boxSize);
    text(leandroBarbeito.nombre + "\n" + leandroBarbeito.ciudad + "\n" + leandroBarbeito.provincia + "\n" + leandroBarbeito.pais, leandroBarbeito.posicionX + nuevoX + xTexto, leandroBarbeito.posicionY + nuevoY + yTexto, tamañoTexto, tamañoTexto)

    ellipse(lupitaChavez.posicionX + nuevoX, lupitaChavez.posicionY + nuevoY, boxSize);
    text(lupitaChavez.nombre + "\n" + lupitaChavez.ciudad + "\n" + lupitaChavez.provincia + "\n" + lupitaChavez.pais, lupitaChavez.posicionX + nuevoX + xTexto, lupitaChavez.posicionY + nuevoY + yTexto, tamañoTexto, tamañoTexto)


    nicMottaModel.position.x = nicMotta.posicionX + nuevoX;
    nicMottaModel.position.y = nicMotta.posicionY + nuevoY;

    if(nicMottaModel.mouseIsPressed){
      nicMottaModel.rotation-= 10;
      // Abrir pop-up con el texto de cara persona
    }

    claudiaValenteModel.position.x = claudiaValente.posicionX + nuevoX;
    claudiaValenteModel.position.y = claudiaValente.posicionY + nuevoY;

    if(claudiaValenteModel.mouseIsPressed){
      claudiaValenteModel.rotation-= 10;
      // Abrir pop-up con el texto de cara persona
    }

    drawSprites();
}

function mousePressed() {
    apretado = true;
    xOffset = mouseX - nuevoX;
    yOffset = mouseY - nuevoY;
    cursor(MOVE);

    
}


function mouseDragged() {
    if (apretado) {
     nuevoX = mouseX - xOffset;
     nuevoY = mouseY - yOffset;
    }
}

function mouseReleased() {
  apretado = false;
  cursor(ARROW);
}

function keyPressed(){  // Reset / poner un boton para volver al centro con algun tipo de delay, mas fluido
  //resetMap()
 
}

function resetMap(){

  nuevoX = width / 2.0;
  nuevoY = height / 2.0;
}

function numeroRandom(){
  //nicMotta.valorCo2 = parseInt(random(400, 10000));
}

let estadoMenu = true;
function mostrarMenu(){
  var menuRosa = document.getElementById('menuRosa');

  estadoMenu = !estadoMenu;

  if (estadoMenu == true) {
    
  }

  if (estadoMenu == false) {
    menuRosa.style.visibility = "visible";
  }
  else { menuRosa.style.visibility = "hidden"; }
   
}