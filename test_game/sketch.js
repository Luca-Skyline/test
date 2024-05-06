//Luca DalCanto | November 2022 | Calculator Project
let leftNums = new Array(10);
let rightNums = new Array(10);
let operators = new Array(7);
let leftAdjusts = new Array(5);
let rightAdjusts = new Array(5);
let font;
let dR, dL, dRes;
let l, r, result;
let operator = " ";
let left = true;
function setup() {
    createCanvas(800, 660);
    leftNums[0] = new NumButton(220, 380, 80, -60, "0");
    leftNums[1] = new NumButton(160, 360, 80, 60, "1");
    leftNums[2] = new NumButton(220, 300, 80, -60, "2");
    leftNums[3] = new NumButton(280, 360, 80, 60, "3");
    leftNums[4] = new NumButton(160, 220, 80, -60, "4");
    leftNums[5] = new NumButton(220, 280, 80, 60, "5");
    leftNums[6] = new NumButton(280, 220, 80, -60, "6");
    leftNums[7] = new NumButton(160, 200, 80, 60, "7");
    leftNums[8] = new NumButton(220, 140, 80, -60, "8");
    leftNums[9] = new NumButton(280, 200, 80, 60, "9");
    rightNums[0] = new NumButton(580, 380, 80, -60, "0");
    rightNums[1] = new NumButton(520, 360, 80, 60, "1");
    rightNums[2] = new NumButton(580, 300, 80, -60, "2");
    rightNums[3] = new NumButton(640, 360, 80, 60, "3");
    rightNums[4] = new NumButton(520, 220, 80, -60, "4");
    rightNums[5] = new NumButton(580, 280, 80, 60, "5");
    rightNums[6] = new NumButton(640, 220, 80, -60, "6");
    rightNums[7] = new NumButton(520, 200, 80, 60, "7");
    rightNums[8] = new NumButton(580, 140, 80, -60, "8");
    rightNums[9] = new NumButton(640, 200, 80, 60, "9");
    operators[0] = new Button(400, 160, 80, 80, "+", 35);
    operators[1] = new Button(400, 240, 80, 80, "-", 35);
    operators[2] = new Button(400, 320, 80, 80, "*", 35);
    operators[3] = new Button(400, 400, 80, 80, "÷", 35);
    operators[4] = new Button(400, 480, 80, 80, "l", 15);
    operators[5] = new Button(450, 440, 60, 60, "x", 20);
    operators[6] = new Button(350, 440, 60, 60, "!", 20);
    leftAdjusts[0] = new Button(70, 210, 60, 60, "e", 30);
    leftAdjusts[1] = new Button(70, 290, 100, 100, "±", 30);
    leftAdjusts[2] = new Button(70, 370, 60, 60, ".", 30);
    leftAdjusts[3] = new Button(110, 450, 100, 100, "C", 30);
    leftAdjusts[4] = new Button(90, 590, 60, 60, "↑", 35);
    rightAdjusts[0] = new Button(730, 210, 60, 60, "e", 30);
    rightAdjusts[1] = new Button(730, 290, 100, 100, "±", 30);
    rightAdjusts[2] = new Button(730, 370, 60, 60, ".", 30);
    rightAdjusts[3] = new Button(690, 450, 100, 100, "C", 30);
    rightAdjusts[4] = new Button(710, 590, 60, 60, "↑", 35);
    dL = "0";
    dR = "0";
    dRes = "0";
}
function preload() {
    font = "Krungthep";
}
function draw() {
    background("#02003E");
    fill("#00475A");
    strokeWeight(0);
    rect(400, 0, 400, 660); //designs:
    stroke(210);
    strokeWeight(4);
    line(400, 0, 400, 660);
    line(0, 0, 40, 40);
    line(0, 160, 40, 120);
    line(400, 0, 360, 40);
    line(400, 160, 360, 120);
    line(400, 0, 440, 40);
    line(400, 160, 440, 120);
    line(760, 40, 800, 0);
    line(760, 120, 800, 160); //buttons:
    for (let i = 0; i < leftNums.length; i++) {
        leftNums[i].display();
        leftNums[i].hover(mouseX, mouseY);
    }
    for (let i = 0; i < operators.length; i++) {
        operators[i].hover(mouseX, mouseY);
        operators[i].display(operator);
    }
    for (let i = 0; i < rightNums.length; i++) {
        rightNums[i].display();
        if (operator != "!") {
            rightNums[i].hover(mouseX, mouseY);
        }
    }
    for (let i = 0; i < rightAdjusts.length; i++) {
        rightAdjusts[i].display(" ");
        if (operator != "!") {
            rightAdjusts[i].hover(mouseX, mouseY);
        }
    }
    for (let i = 0; i < leftAdjusts.length; i++) {
        leftAdjusts[i].display(" ");
        leftAdjusts[i].hover(mouseX, mouseY);
    }
    if (operator == "!") {
        fill("#484848", 200);
        strokeWeight(0);
        rect(402, 0, 400, 660);
        strokeWeight(4);
    }
    for (let i = 0; i < operators.length; i++) {
        operators[i].hover(mouseX, mouseY);
        operators[i].display(operator);
    }
    updateDisplays();
}
function updateDisplays() {
    fill(210);
    rect(40, 40, 320, 80);
    rect(440, 40, 320, 80);
    rect(150, 550, 500, 80);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont(font);
    text("x", 50, 50);
    text("y", 450, 50);
    text("=", 170, 588); //show values:
    if (dL.length() < 9) {
        textSize(50);
    } else {
        textSize(66 - 2.4 * dL.length());
    }
    text(dL, 200, 80);
    if (dR.length() < 9) {
        textSize(50);
    } else {
        textSize(66 - 2.4 * dR.length());
    }
    text(dR, 600, 80);
    textSize(50);
    text(dRes, 400, 590);
}
function keyPressed() {
    console.log("key:" + key);
    console.log("keyCode:" + keyCode);
    if (keyCode == 107 || keyCode == 61) {
        doMath("+");
        left = false;
    } else if (keyCode == 109 || keyCode == 45) {
        doMath("-");
        left = false;
    } else if (keyCode == 106 || keyCode == 88) {
        doMath("*");
        left = false;
    } else if (keyCode == 47 || keyCode == 111) {
        doMath("÷");
        left = false;
    } else if (keyCode == 27 || keyCode == 12) {
        handleLeftEvent("C", false);
        handleRightEvent("C", false);
        left = true;
    } else if (keyCode == 10) {
        handleLeftEvent("↑", false);
        left = false;
    } else if (left) {
        //if should work on left
        if (keyCode == 48 || keyCode == 96) {
            handleLeftEvent("0", true);
        } else if (keyCode == 49 || keyCode == 97) {
            handleLeftEvent("1", true);
        } else if (keyCode == 50 || keyCode == 98) {
            handleLeftEvent("2", true);
        } else if (keyCode == 51 || keyCode == 99) {
            handleLeftEvent("3", true);
        } else if (keyCode == 52 || keyCode == 100) {
            handleLeftEvent("4", true);
        } else if (keyCode == 53 || keyCode == 101) {
            handleLeftEvent("5", true);
        } else if (keyCode == 54 || keyCode == 102) {
            handleLeftEvent("6", true);
        } else if (keyCode == 55 || keyCode == 103) {
            handleLeftEvent("7", true);
        } else if (keyCode == 56 || keyCode == 104) {
            handleLeftEvent("8", true);
        } else if (keyCode == 57 || keyCode == 105) {
            handleLeftEvent("9", true);
        } else if (keyCode == 69) {
            handleLeftEvent("e", false);
        } else if (keyCode == 46 || keyCode == 110) {
            handleLeftEvent(".", false);
        }
    } else if (!left) {
        //if should work on left
        if (keyCode == 48 || keyCode == 96) {
            handleRightEvent("0", true);
        } else if (keyCode == 49 || keyCode == 97) {
            handleRightEvent("1", true);
        } else if (keyCode == 50 || keyCode == 98) {
            handleRightEvent("2", true);
        } else if (keyCode == 51 || keyCode == 99) {
            handleRightEvent("3", true);
        } else if (keyCode == 52 || keyCode == 100) {
            handleRightEvent("4", true);
        } else if (keyCode == 53 || keyCode == 101) {
            handleRightEvent("5", true);
        } else if (keyCode == 54 || keyCode == 102) {
            handleRightEvent("6", true);
        } else if (keyCode == 55 || keyCode == 103) {
            handleRightEvent("7", true);
        } else if (keyCode == 56 || keyCode == 104) {
            handleRightEvent("8", true);
        } else if (keyCode == 57 || keyCode == 105) {
            handleRightEvent("9", true);
        } else if (keyCode == 69) {
            handleRightEvent("e", false);
        } else if (keyCode == 46 || keyCode == 110) {
            handleRightEvent(".", false);
        }
    }
}
function handleLeftEvent(val, num) {
    if (num && dL.length() < 15) {
        if (dL.equals("0") || dL.equals("e")) {
            dL = str(val);
        } else {
            dL += str(val);
        }
        l = float(dL);
    } else {
        if (val == "C") {
            console.log("CLEAR");
            dL = "0";
            l = 0.0;
        } else if (val == "±") {
            if (!dL.contains("-")) {
                dL = "-" + dL;
            } else {
                dL = dL.replace("-", "");
            }
            l = float(dL);
        } else if (val == "↑") {
            dL = str(result);
            l = result;
        } else if (val == "e") {
            l = 2.718281;
            dL = "e";
        } else if (val == "." && !dL.contains(".")) {
            dL += ".";
        }
    }
    doMath(operator);
}
function handleRightEvent(val, num) {
    if (num && dR.length() < 15) {
        if (dR.equals("0") || dR.equals("e")) {
            dR = str(val);
        } else {
            dR += str(val);
        }
        r = float(dR);
    } else {
        if (val == "C") {
            dR = "0";
            r = 0.0;
        } else if (val == "±") {
            if (!dR.contains("-")) {
                dR = "-" + dR;
            } else {
                dR = dR.replace("-", "");
            }
            r = float(dR);
        } else if (val == "↑") {
            dR = str(result);
            r = result;
        } else if (val == "e") {
            r = 2.718281;
            dR = "e";
        } else if (val == "." && !dR.contains(".")) {
            dR += ".";
        }
    }
    doMath(operator);
}
function doMath(op) {
    operator = op; //do math:
    if (op == "+") {
        result = l + r;
    } else if (op == "-") {
        result = l - r;
    } else if (op == "÷") {
        result = l / r;
    } else if (op == "*") {
        result = l * r;
    } else if (op == "x") {
        result = pow(l, r);
    } else if (op == "!") {
        if (l >= 0) {
            result = 1;
            for (let i = 2; i <= l; i++) {
                result *= i;
                if (result >= 300000000000000000000000000000000000000.0) {
                    break;
                }
            }
        }
    } else if (op == "l") {
        result = log(r) / log(l);
    }
    if ((op == "÷" && r == 0.0) || (op == "!" && (int(l) != l || l < 0))) {
        dRes = "DNE";
    } else if (result >= 300000000000000000000000000000000000000.0) {
        result = 300000000000000000000000000000000000000.0;
        dRes = "ERR-TOO LARGE";
    } else if (result <= -300000000000000000000000000000000000000.0) {
        result = -300000000000000000000000000000000000000.0;
        dRes = "ERR-TOO SMALL";
    } else {
        dRes = nf(result);
    }
}
function mouseReleased() {
    for (let i = 0; i < leftNums.length; i++) {
        if (leftNums[i].on) {
            handleLeftEvent(leftNums[i].val, true);
        }
    }
    for (let i = 0; i < rightNums.length; i++) {
        if (rightNums[i].on) {
            handleRightEvent(rightNums[i].val, true);
        }
    }
    for (let i = 0; i < operators.length; i++) {
        if (operators[i].on) {
            doMath(operators[i].val);
            left = false;
        }
    }
    for (let i = 0; i < leftAdjusts.length; i++) {
        if (leftAdjusts[i].on) {
            handleLeftEvent(leftAdjusts[i].val, false);
        }
    }
    for (let i = 0; i < rightAdjusts.length; i++) {
        if (rightAdjusts[i].on) {
            handleRightEvent(rightAdjusts[i].val, false);
        }
    }
}
