class NumButton {
  //Member Variable
  int x, y, w, h;
  color c1, c2;
  char val;
  boolean on;

  PFont font;

  NumButton(int x, int y, int w, int h, char val) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.val = val;
    c1 = color(210);
    c2 = color(170);
    on = false;
    font = createFont("Krungthep", 24);
  }

  void display() {
    if (on) {
      fill(c2);
    } else {
      fill(c1);
    }

    triangle(x-(w/2), y, x+(w/2), y, x, y-h);


    textAlign(CENTER, CENTER);
    fill(0);
    textFont(font);
    text(val, x, y-(4*h/10)-3);
  }

  void hover(int mx, int my) {
    float a = sqrt(sq(mx-(x-(w/2)))+sq(my-(y))); //distance from point 1 to mouse
    float b = sqrt(sq(mx-(x+(w/2)))+sq(my-(y))); //distance from point 2 to mouse
    float c = sqrt(sq(mx-(x))+sq(my-(y-h))); //distance from point 3 to mouse

    float s1 = (a+b+sqrt(sq((x+(w/2))-(x-(w/2)))+sq(y-y)))/2; //a, b, and mouse
    float area1 = sqrt(s1*(s1-a)*(s1-b)*(s1-sqrt(sq((x+(w/2))-(x-(w/2)))+sq(y-y))));

    float s2 = (b+c+sqrt(sq((x)-(x+(w/2)))+sq((y-h)-y)))/2; //b, c, and mouse
    float area2 = sqrt(s2*(s2-b)*(s2-c)*(s2-sqrt(sq((x)-(x+(w/2)))+sq((y-h)-y))));

    float s3 = (a+c+sqrt(sq((x)-(x-(w/2)))+sq((y-h)-y)))/2; //a, c, and mouse
    float area3 = sqrt(s3*(s3-a)*(s3-c)*(s3-sqrt(sq((x)-(x-(w/2)))+sq((y-h)-y))));
    
    on = ((area1 + area2 + area3) <= ((w * abs(h)/2)+2));
  }
}
