difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    lwx = results[0].pose.leftWrist.x;
    rwx = results[0].pose.rightWrist.x;
    difference = floor(lwx - rwx);
    }
    


}

function draw(){
    background("yellow");
    textSize(difference);
    fill("red");
    text('COMING SOON', 50, 400);
}

