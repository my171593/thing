var nosex=0;
var nosey=0;
function preload(){
mustache_nose=loadImage("download.png");
}

function setup(){
Canvas=createCanvas(350,400);
Canvas.center();
video=createCapture(VIDEO);
video.size(350,400);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw(){
image(video,0,0,350,400);
image(clown_nose,nosex,nosey,57,57);
}

function take_snapshot(){
  save("picture.png");   
}

function modelLoaded(){
  console.log("poseNet is working");

}
function gotPoses(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x-25;
console.log("nosex="+nosex);
nosey=results[0].pose.nose.y-25;
console.log("nosey="+nosey);
}
}