function setup() {
    createCanvas(300, 300);
} 

function draw() {
    background(0);
    noStroke();
    square(0, 0, 100);
    fill(255);
    square(200, 0, 100);
    fill(255);
    square(0, 200, 100);
    fill(255);
    square(200, 200, 100);
    fill(255);
}