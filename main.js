function preload() {

}

function setup(){
    canvas=createCanvas(650,500);
    canvas.position(100,100);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,550,400);
    fill(0,0,255)
    circle(110,110,50);
}