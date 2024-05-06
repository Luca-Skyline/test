// Connor Soelberg | 31 Oct 2022 | Calculator

class Button {
  // Member Variables
  constructor(x, y, w, h, val) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.val = val;
    this.c1 = color('#F08100');
    this.c2 = color('#F8A411');
    this.on = false;
  }

  display() {
    if (this.on === true) {
      fill(this.c2);
    } else {
      fill(this.c1);
    }
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textSize(50);
    textAlign(CENTER);
    fill('#042F61');
    if (this.w === 60 && this.val !== '2' && this.val !== '√') {
      textSize(50);
      if (this.h === 40) {
        text(this.val, this.x+30, this.y+37);
      } else {
        text(this.val, this.x+30.5, this.y+47);
      }
    } else if (this.w === 40 && this.val !== '√' && this.val !== '2') {
      textSize(33.3);
      text(this.val, this.x+21, this.y+31);
    } else if (this.val !== '√' && this.val !== '2') {
      textSize(30);
      text(this.val, this.x+10.5, this.y+28);
    }
    if (this.val === '√') {
      textSize(33.3);
      text("√ X", (this.x+30), (this.y+32));
    }
    if (this.val === '2' && this.w === 20) {
      textSize(30);
      text('²', (this.x+11), (this.y+28));
    }
    if (this.val === '2' && this.w === 60) {
      textSize(50);
      text("2", this.x+30.5, this.y+47);
    }
  }

  hover(mx, my) {
    this.on = (mx > this.x && mx < this.x+this.w && my > this.y && my < this.y+this.h);
  }
}

let numButtons = [];
let opButtons = [];
let dVal = "0";
let left = true;
let l, r, result;
let op = ' ';

function setup() {
  createCanvas(340, 500);
  background('#0F3561');
  numButtons[0] = new Button(100, 360, 60, 60, '0');
  numButtons[1] = new Button(20, 120, 60, 60, '1');
  numButtons[2] = new Button(100, 120, 60, 60, '2');
  numButtons[3] = new Button(180, 120, 60, 60, '3');
  numButtons[4] = new Button(20, 200, 60, 60, '4');
  numButtons[5] = new Button(100, 200, 60, 60, '5');
  numButtons[6] = new Button(180, 200, 60, 60, '6');
  numButtons[7] = new Button(20, 280, 60, 60, '7');
  numButtons[8] = new Button(100, 280, 60, 60, '8');
  numButtons[9] = new Button(180, 280, 60, 60, '9');
  opButtons[0] = new Button(300, 120, 20, 20, '2');
  opButtons[1] = new Button(260, 140, 40, 40, 'X');
  opButtons[2] = new Button(260, 200, 60, 40, '÷');
  opButtons[3] = new Button(260, 260, 60, 40, '−');
  opButtons[4] = new Button(260, 320, 60, 40, '×');
  opButtons[5] = new Button(260, 380, 60, 40, '+');
  opButtons[6] = new Button(260, 440, 60, 40, '=');
  opButtons[7] = new Button(20, 360, 60, 40, '√');
  opButtons[8] = new Button(180, 360, 60, 40, '.');
  opButtons[9] = new Button(20, 420, 60, 60, 'C');
  opButtons[10] = new Button(100, 440, 60, 40, '±');
  opButtons[11] = new Button(180, 420, 60, 60, '%');
}

function draw() {
  noStroke();
  fill('#20615A');
  rect(0, 0, 340, 500, 45, 45, 45, 45);
  stroke('#0F3561');
  line(0, 100, 340, 100);
  for (let button of numButtons) {
    button.display();
    button.hover(mouseX, mouseY);
  }
  for (let button of opButtons) {
    button.display();
    button.hover(mouseX, mouseY);
  }
  updateDisplay();
}

function keyPressed() {
  if (keyCode == 49 || keyCode == 97) {
    handleEvent("1", true);
  } else if (keyCode == 50 || keyCode == 98) {
    handleEvent("2", true);
  } else if (keyCode == 51 || keyCode == 99) {
    handleEvent("3", true);
  } else if (keyCode == 52 || keyCode == 100) {
    handleEvent("4", true);
  } else if (keyCode == 53 || keyCode == 101) {
    handleEvent("5", true);
  } else if (keyCode == 54 || keyCode == 102) {
    handleEvent("6", true);
  } else if (keyCode == 55 || keyCode == 103) {
    handleEvent("7", true);
  } else if (keyCode == 56 || keyCode == 104) {
    handleEvent("8", true);
  } else if (keyCode == 57 || keyCode == 105) {
    handleEvent("9", true);
  } else if (keyCode == 48 || keyCode == 96) {
    handleEvent("0", true);
  } else if (keyCode == 67 || keyCode == 8) {
    handleEvent("C", false);
  } else if (keyCode == 46 || keyCode == 110) {
    handleEvent(".", false);
  } else if (keyCode == 32) {
    handleEvent("±", false);
  } else if (keyCode == 107) {
    handleEvent("+", false);
  } else if (keyCode == 45 || keyCode == 109) {
    handleEvent("-", false);
  } else if (keyCode == 106) {
    handleEvent("×", false);
  } else if (keyCode == 47 || keyCode == 111) {
    handleEvent("÷", false);
  } else if (keyCode == 10 || keyCode == 61) {
    handleEvent("=", false);
  } else if (keyCode == 82) {
    handleEvent("sqrt", false);
  } else if (keyCode == 80) {
    handleEvent("%", false);
  } else if (keyCode == 69) {
    handleEvent("exp", false);
  } else if (keyCode == 88) {
    handleEvent("X", false);
  }

  if (keyPressed === true && opButtons[0].on || opButtons[1].on || opButtons[2].on || opButtons[3].on || opButtons[4].on || opButtons[5].on || opButtons[7].on) {
    strokeWeight(2);
  }
  if (keyPressed === true && opButtons[6].on || opButtons[9].on) {
    strokeWeight(1);
  }
}

function handleEvent(val, num) {
  if (num && dVal.length < 21) {
    if (dVal === "0") {
      dVal = val;
    } else {
      dVal += val;
    }
    if (left) {
      l = parseFloat(dVal);
    } else {
      r = parseFloat(dVal);
    }
    if (parseFloat(dVal) === parseInt(dVal)) {
      dVal = str(parseInt(dVal));
    }
  } else if (val === "C") {
    dVal = "0";
    left = true;
    l = 0.0;
    r = 0.0;
    result = 0.0;
    op = ' ';
    if (parseFloat(dVal) === parseInt(dVal)) {
      dVal = str(parseInt(dVal));
    }
  } else if (val === ".") {
    if (!dVal.includes(".")) {
      dVal += ".";
    }
  } else if (val === "±") {
    if (left) {
      l *= -1;
      dVal = str(l);
    } else {
      r *= -1;
      dVal = str(r);
    }
    if (parseFloat(dVal) === parseInt(dVal)) {
      dVal = str(parseInt(dVal));
    }
  } else if (val === "+") {
    op = '+';
    dVal = "0";
    left = false;
  } else if (val === "×") {
    op = '×';
    dVal = "0";
    left = false;
  } else if (val === "-") {
    op = '−';
    dVal = "0";
    left = false;
  } else if (val === "÷") {
    op = '÷';
    dVal = "0";
    left = false;
  } else if (val === "=") {
    performCalculation();
  } else if (val === "sqrt") {
    l = sqrt(l);
    dVal = str(l);
    if (parseFloat(dVal) === parseInt(dVal)) {
      dVal = str(parseInt(dVal));
    }
  } else if (val === "%") {
    if (left) {
      l /= 100;
      dVal = str(l);
    } else {
      r /= 100;
      dVal = str(r);
    }
    if (parseFloat(dVal) === parseInt(dVal)) {
      dVal = str(parseInt(dVal));
    }
  } else if (val === "exp") {
    dVal = "Inpt Exp";
    op = 'e';
    left = false;
  } else if (val === "X") {
  }
}

function mouseReleased() {
  for (let button of numButtons) {
    if (button.on) {
      handleEvent(str(button.val), true);
    }
  }

  for (let button of opButtons) {
    if (button.on && button.val === 'C') {
      handleEvent(str(button.val), false);
    } else if (button.on && button.val === '+') {
      handleEvent("+", false);
    } else if (button.on && button.val === '×') {
      handleEvent("×", false);
    } else if (button.on && button.val === '−') {
      handleEvent("-", false);
    } else if (button.on && button.val === '÷') {
      handleEvent("÷", false);
    } else if (button.on && button.val === '=') {
      handleEvent("=", false);
    } else if (button.on && button.val === '.') {
      handleEvent(".", false);
    } else if (button.on && button.val === '%') {
      handleEvent("%", false);
    } else if (button.on && button.val === '2') {
      handleEvent("exp", false);
    } else if (button.on && button.val === 'X') {
      handleEvent("X", false);
    } else if (button.on && button.val === '√') {
      handleEvent("sqrt", false);
    } else if (button.on && button.val === '±') {
      handleEvent("±", false);
    }
  }
  console.log("l: " + l + " r: " + r + " op: " + op + " result: " + result);
  if (mousePressed === true && opButtons[0].on || opButtons[2].on || opButtons[3].on || opButtons[4].on || opButtons[5].on || opButtons[7].on) {
    strokeWeight(2);
  }
  if (mousePressed === true && opButtons[6].on || opButtons[9].on) {
    strokeWeight(1);
  }
}

function updateDisplay() {
  noStroke();
  fill(100);
  rect(20, 20, 300, 60, 45, 45, 45, 45);
  fill('#042F61');
  textAlign(RIGHT);
  if (dVal === "NaN") {
    dVal = "Error";
  }
  if (dVal === "Infinity") {
    dVal = "Out of Bounds";
  } else if (dVal === "-Infinity") {
    dVal = "Out of Bounds";
  }
  if (dVal.length < 12) {
    textSize(50);
  } else if (dVal.length < 13) {
    textSize(46);
  } else if (dVal.length < 14) {
    textSize(42);
  } else if (dVal.length < 15) {
    textSize(40);
  } else if (dVal.length < 16) {
    textSize(37);
  } else if (dVal.length < 17) {
    textSize(35);
  } else if (dVal.length < 18) {
    textSize(33);
  } else if (dVal.length < 19) {
    textSize(31);
  } else if (dVal.length < 20) {
    textSize(29);
  } else {
    textSize(27);
  }
  text(dVal, width-30, 67.5);
}

function performCalculation() {
  if (op === '+') {
    result = l + r;
  } else if (op === '−') {
    result = l - r;
  } else if (op === '×') {
    result = l * r;
  } else if (op === '÷') {
    result = l / r;
  } else if (op === 'e') {
    pow(l, r);
  }
  dVal = str(result);
  l = result;
  left = true;
  if (dVal === "0.0") {
    dVal === "0";
  }
  if (parseFloat(dVal) === parseInt(dVal)) {
    dVal = str(parseInt(dVal));
  }
}
