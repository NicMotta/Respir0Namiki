
let bx;
let by;
let boxSize = 30;
let xOffset = 0.0;
let yOffset = 0.0;

let apretado = false;

// Definir cada objeto con su informacion correspondiente, posicion en X, Y, offset, texto, color, etc

function setup() {
  createCanvas(windowWidth, windowHeight);
  bx = width / 2.0;
  by = height / 2.0;
  rectMode(CENTER);;
}

function draw() {
    background(120);
    noStroke()
    fill(200);


    // Nodos dibujados
    ellipse(bx, by, boxSize);
    ellipse(100 + bx, 200 + by, boxSize);
    ellipse(500 + bx, 500 + by, boxSize);
    ellipse(800 + bx, 900 + by, boxSize);

    let texto = "Nic Motta / San Fernando, Buenos Aires, Argentina"
    let texto2 = "Claudia Valente / Jose C. Paz, Buenos Aires, Argentina"

    text(texto, bx + 80, by + 40, 100, 100)
    text(texto2, 100 + bx + 80, 200 + by + 40, 100, 100)

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
    bx = width / 2.0;;
    by = height / 2.0;;
}
