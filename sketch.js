
// Programado por Nic Motta
// 2021
// MURU7.8

// Configuracion navegacion nodos
let bx;
let by;
let boxSize = 30;
let xOffset = 0.0;
let yOffset = 0.0;
let apretado = false;

// Configuracion texto de nodos
let xTexto = 130;
let yTexto = 40;
let tamañoTexto = 150;

// Configuracion de animaciones
let puntito;

// Definir cada objeto con su informacion correspondiente, posicion en X, Y, offset, texto, color, etc
var nicMotta = {
              nombre:"Nic Motta", 
              ciudad:"San Fernando", 
              provincia:"Buenos Aires", 
              pais:"Argentina",
              coordenadas: "",
              valorCo2: 400,
              texto: "",
              posicionX: 0,
              posicionY: 0,
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
                ciudad:"Mexico", 
                provincia:"Mexico", 
                pais:"Mexico",
                coordenadas: "",
                valorCo2: 150,
                texto: "",
                posicionX: -500,
                posicionY: 600,
                };

function setup() {
  createCanvas(windowWidth, windowHeight);
  bx = width / 2.0;
  by = height / 2.0;
  rectMode(CENTER);
  strokeWeight(2);
  textLeading(18); // Espacio entre lineas de texto
  textFont("MuseoModerno");
  textSize(15)
 
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

}

function draw() {
    background(40);
    stroke(80);
    noFill();
    ellipse(nicMotta.posicionX + bx, nicMotta.posicionY + by, 500);
    ellipse(claudiaValente.posicionX + bx, claudiaValente.posicionY + by, 500);

    noStroke();
    


    // Colores semaforo para CO2
    nicMotta.valorMap = map(nicMotta.valorCo2, 400, 10000, 0, 255);
    fill(nicMotta.valorMap, 120, 0, 100);
    ellipse(nicMotta.posicionX + bx, nicMotta.posicionY + by, 100);
    //rect(nicMotta.posicionX + bx, nicMotta.posicionY + by, 100);



    fill(200);
    // Nodos dibujados
    //ellipse(nicMotta.posicionX + bx, nicMotta.posicionY + by, boxSize);
    text(nicMotta.nombre + "\n" + nicMotta.ciudad + "\n" + nicMotta.provincia + "\n" + nicMotta.pais + "\n" + "Valor Co2: " + nicMotta.valorCo2,
         nicMotta.posicionX + bx + xTexto, nicMotta.posicionY + by + yTexto,
         tamañoTexto, tamañoTexto
         );
    //line(nicMotta.posicionX, nicMotta.posicionY, claudiaValente.posicionX, nicMotta.posicionY);

    text(claudiaValente.nombre + "\n" + claudiaValente.ciudad + "\n" + claudiaValente.provincia + "\n" + claudiaValente.pais, claudiaValente.posicionX + bx + xTexto, claudiaValente.posicionY + by + yTexto, tamañoTexto, tamañoTexto)

    ellipse(leandroBarbeito.posicionX + bx, leandroBarbeito.posicionY + by, boxSize);
    text(leandroBarbeito.nombre + "\n" + leandroBarbeito.ciudad + "\n" + leandroBarbeito.provincia + "\n" + leandroBarbeito.pais, leandroBarbeito.posicionX + bx + xTexto, leandroBarbeito.posicionY + by + yTexto, tamañoTexto, tamañoTexto)

    ellipse(lupitaChavez.posicionX + bx, lupitaChavez.posicionY + by, boxSize);
    text(lupitaChavez.nombre + "\n" + lupitaChavez.ciudad + "\n" + lupitaChavez.provincia + "\n" + lupitaChavez.pais, lupitaChavez.posicionX + bx + xTexto, lupitaChavez.posicionY + by + yTexto, tamañoTexto, tamañoTexto)


    nicMottaModel.position.x = nicMotta.posicionX + bx;
    nicMottaModel.position.y = nicMotta.posicionY + by;

    if(nicMottaModel.mouseIsPressed){
      nicMottaModel.rotation-= 10;
      // Abrir pop-up con el texto de cara persona
    }

    claudiaValenteModel.position.x = claudiaValente.posicionX + bx;
    claudiaValenteModel.position.y = claudiaValente.posicionY + by;

    if(claudiaValenteModel.mouseIsPressed){
      claudiaValenteModel.rotation-= 10;
      // Abrir pop-up con el texto de cara persona
    }

    drawSprites();
}

function mousePressed() {
    apretado = true;
    xOffset = mouseX - bx;
    yOffset = mouseY - by;
    cursor(MOVE);

    
}


function mouseDragged() {
    if (apretado) {
     bx = mouseX - xOffset;
     by = mouseY - yOffset;
    }
}

function mouseReleased() {
  apretado = false;
  cursor(ARROW);
}

function keyPressed(){  // Reset / poner un boton para volver al centro con algun tipo de delay, mas fluido
  resetMap()
 
}

function resetMap(){

  bx = width / 2.0;
  by = height / 2.0;
}

function numeroRandom(){
  nicMotta.valorCo2 = parseInt(random(400, 10000));
}

let mostrarbool = false;
function mostrarInfo(){
  var mostrar = document.getElementById('info');

  mostrarbool = !mostrarbool;

  if (mostrarbool == true) {
    mostrar.style.visibility = "hidden";
  }

  if (mostrarbool == false) {
    mostrar.style.visibility = "visible";
  }
   
}