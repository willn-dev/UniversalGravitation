let bodies = [];
let greatAttractor;

function setup() {
    createCanvas(1600, 800);

    for (let i = 0; i < 15; i++){

        let pos = p5.Vector.random2D();
        let vel = pos.copy();
        vel.setMag(random(7, 12));
        pos.setMag(random(100,250));

        vel.rotate(PI / 2); //90%

        let m = random(10,15); 
        bodies[i] = (new Body(pos.x, pos.y, vel.x, vel.y, m));
        background(0);
    }
    sun = new Body(0,0,0,0,500);

}

function draw() {
    background(0, 20);
    translate(width / 2, height / 2);

    for(let body of bodies){
      sun.attract(body);

      for(let other of bodies){
        if(body !== other){
          body.attract(other);
        }
      }
    }

    for(body of bodies){
        body.update();
        body.show();
    }
}
