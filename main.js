nose_x=0;
nose_y=0;
r_ear_x=0;
r_ear_y=0;
l_ear_x=0;
l_ear_y=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/W3V0ZMg6/11649-raw.png");
    ear_ring=loadImage("https://i.postimg.cc/PqV214hS/9-98746-pearls-png-pink-pearl-png-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nose_x,nose_y,30,30);
    image(ear_ring,r_ear_x,r_ear_y,20,20);
    image(ear_ring,l_ear_x,l_ear_y,20,20);
}
function snap(){
    save('Clown-nose image.png')
}
function modelLoaded(){
    console.log("PoseNet loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nose_y=results[0].pose.nose.y;
        nose_x=results[0].pose.nose.x;
        console.log(nose_x,nose_y)
        nose_x=nose_x-15;
        nose_y=nose_y-15;
        r_ear_x=results[0].pose.rightEar.x;
        r_ear_y=results[0].pose.rightEar.y;
        l_ear_x=results[0].pose.leftEar.x;
        l_ear_y=results[0].pose.leftEar.y;
        //r_ear_y=r_ear_y-15;
        r_ear_x=r_ear_x-10;
        //l_ear_y=l_ear_y-15;
        l_ear_x=l_ear_x-10;
    }
}