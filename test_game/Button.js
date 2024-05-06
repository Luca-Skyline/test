class Button {
    //Member Variable
    x;
    y;
    w;
    h;
    c1;
    c2;
    val;
    on;
    font;
    variableFont;
    constructor(x, y, w, h, val, txtSize) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.val = val;
        this.c1 = color(210);
        this.c2 = color(170);
        this.on = false;
        this.font = loadFont("Krungthep", txtSize);
        this.variableFont = loadFont("Arial", 10);
    }
    display(currentOp) {
        if (this.on || currentOp == this.val) {
            fill(this.c2);
        } else {
            fill(this.c1);
        }
        quad(
            this.x,
            this.y - this.h / 2,
            this.x + this.w / 2,
            this.y,
            this.x,
            this.y + this.h / 2,
            this.x - this.w / 2,
            this.y
        );
        textAlign(CENTER, CENTER);
        fill(0);
        if (this.val == "√") {
            textFont(this.variableFont);
            text("y", this.x - 6, this.y - 6);
            textFont(this.font);
            text("√", this.x, this.y);
            textFont(this.variableFont);
            text("x", this.x + 7, this.y + 2);
        } else if (this.val == "l") {
            textFont(this.font);
            text("log  (y)", this.x, this.y);
            textFont(this.variableFont);
            text("x", this.x + 2, this.y + 11);
        } else if (this.val == "x") {
            textFont(this.font);
            text("x", this.x - 3, this.y);
            textFont(this.variableFont);
            text("y", this.x + 6, this.y - 9);
        } else if (this.val == "C") {
            textFont(this.font);
            text("CLR", this.x, this.y - 5);
        } else {
            textFont(this.font);
            text(this.val, this.x, this.y - 5);
        }
    }
    hover(mx, my) {
        let a = sqrt(sq(mx - this.x) + sq(my - (this.y - this.h / 2))); //distance from point 1 to mouse
        let b = sqrt(sq(mx - (this.x + this.w / 2)) + sq(my - this.y)); //distance from point 2 to mouse
        let c = sqrt(sq(mx - this.x) + sq(my - (this.y + this.h / 2))); //distance from point 3 to mouse
        let d = sqrt(sq(mx - (this.x - this.w / 2)) + sq(my - this.y)); //distance from point 3 to mouse
        let s1 =
            (a +
                b +
                sqrt(
                    sq(this.x + this.w / 2 - this.x) +
                        sq(this.y - (this.y - this.h / 2))
                )) /
            2; //a, b, and mouse
        let area1 = sqrt(
            s1 *
                (s1 - a) *
                (s1 - b) *
                (s1 -
                    sqrt(
                        sq(this.x - (this.x + this.w / 2)) +
                            sq(this.y - (this.y - this.h / 2))
                    ))
        );
        let s2 =
            (b +
                c +
                sqrt(
                    sq(this.x - (this.x + this.w / 2)) +
                        sq(this.y + this.h / 2 - this.y)
                )) /
            2; //b, c, and mouse
        let area2 = sqrt(
            s2 *
                (s2 - b) *
                (s2 - c) *
                (s2 -
                    sqrt(
                        sq(this.x - (this.x + this.w / 2)) +
                            sq(this.y + this.h / 2 - this.y)
                    ))
        );
        let s3 =
            (c +
                d +
                sqrt(
                    sq(this.x - this.w / 2 - this.x) +
                        sq(this.y - (this.y + this.h / 2))
                )) /
            2; //c, d, and mouse
        let area3 = sqrt(
            s3 *
                (s3 - c) *
                (s3 - d) *
                (s3 -
                    sqrt(
                        sq(this.x - this.w / 2 - this.x) +
                            sq(this.y - (this.y + this.h / 2))
                    ))
        );
        let s4 =
            (d +
                a +
                sqrt(
                    sq(this.x - this.w / 2 - this.x) +
                        sq(this.y - (this.y - this.h / 2))
                )) /
            2; //a, d, and mouse
        let area4 = sqrt(
            s4 *
                (s4 - a) *
                (s4 - d) *
                (s4 -
                    sqrt(
                        sq(this.x - this.w / 2 - this.x) +
                            sq(this.y - (this.y - this.h / 2))
                    ))
        );
        this.on = area1 + area2 + area3 + area4 <= (this.h * this.w) / 2 + 2;
    }
}
