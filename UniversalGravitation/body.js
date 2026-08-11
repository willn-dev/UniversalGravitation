class Body{

    /**
     @param {number} m - Mass 
     */
    constructor(x,y,m){
        this.pos = createVector(x,y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(7)
        this.mass = m;
        this.accl = createVector(0,0);
        this.radius = sqrt(this.mass) * 2;
    }

    applyForce(force){
        let f = p5.Vector.div(force, this.mass);
        this.accl.add(f);
    }

    update(){
        this.vel.add(this.accl);
        this.pos.add(this.vel);
        this.accl.set(0,0);
    }


    show(){
      noStroke()
      fill(255);
      ellipse(this.pos.x, this.pos.y, (this.radius * 2));
    }

}