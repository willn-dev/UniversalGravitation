class Body{

    /**
     @param {Number} vx -Velocity X
     @param {Number} vy -Velocity Y
     @param {number} m - Mass
     */
    constructor(x, y, vx, vy, m){
        this.pos = createVector(x,y);
        this.vel = createVector(vx,vy);
        this.mass = m;
        this.accl = createVector(0,0);
        this.radius = sqrt(this.mass) * 2;
    }

    applyForce(force){
        let f = p5.Vector.div(force, this.mass);
        this.accl.add(f);
    }

    attract(body){
      let force = p5.Vector.sub(this.pos, body.pos);
      let distanceSq = constrain(force.magSq(),100, 1000);

      let G = .5;
      let attrMag = G * (this.mass * body.mass) / distanceSq;

      force.setMag(attrMag);
      body.applyForce(force);
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