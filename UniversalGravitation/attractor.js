class Attractor{

    constructor(x, y, m){
        this.pos = createVector(x,y);
        this.mass = m;
        this.r = sqrt(this.mass) * 2;
    }

    attract(body){
        let force = p5.Vector.sub(this.pos, body.pos);
        let distanceSq = constrain(force.magSq(),100, 1000);

        let G = 5;
        let attrMag = G * (this.mass * body.mass) / distanceSq;

        force.setMag(attrMag);
        body.applyForce(force);
    }

    show(){
        noStroke();
        fill(0,100,255);
        ellipse(this.pos.x, this.pos.y, this.r*2);
    }
}