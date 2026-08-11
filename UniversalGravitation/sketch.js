let bodies = [];
let attractor;


function setup() {
    createCanvas(800, 800);

    for (let i = 0; i < 10; i++){

        x = random(width);
        y = random(height);
        m = random(50,80); 
        bodies.push(new Body(x, y, m));
    }
    attractor = new Attractor(width / 2, height / 2, 100);
    background(0);
}

function draw() {
    background(0, 5);

    for(body of bodies){
        body.update();
        body.show();
        attractor.attract(body);
    }
    attractor.show();
}
