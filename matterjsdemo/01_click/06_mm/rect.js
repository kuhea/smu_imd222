class Rect {
  constructor(x, y, w, h, c, opt) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.bodies = Bodies.rectangle(this.x, this.y, this.w, this.h, opt);
  }

  render() {
    rectMode(CENTER);
    push();
    translate(this.bodies.position.x, this.bodies.position.y);
    rotate(this.bodies.angle);
    fill(this.c);
    // 컬러 c로만 만들었을 때의 단점. rgb로 안하고 한번에 집어넣어야한다?
    rect(0, 0, this.w, this.h);
    pop();
  }
}
