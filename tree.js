// coding train tutorial
var angle = 0;
function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
    background(50, 150, 100);
    angle = slider.value();
    stroke(255);
    translate(200, height);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, - len);
    translate(0, -len);
    if (len > 1) {
        push();
        rotate(angle);
        branch(len * 0.6);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.6);
        pop();
        
    }
    
}