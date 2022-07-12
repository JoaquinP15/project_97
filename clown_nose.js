nosex = 0
nosey = 0

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/T1qV2R2T/red-nose.png');
}

function setup(){
    canvas = createCanvas(300, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 250);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex ="+ results[0].pose.nose.x);
        console.log("nosey ="+ results[0].pose.nose.y);

        nosex = results[0].pose.nose.x - 10;
        nosey = results[0].pose.nose.y - 10;
    }
}


function modelLoaded(){
    console.log("posenet is initialized")
}

function draw(){
    image(video,0, 0,300, 250);
    image(clown_nose, nosex, nosey, 30, 30);
}

function take_snapshot(){
    save('Image.png');
}

function nextfilter(){
    window.location = "dog_nose.html";
}

function back(){
    window.location = "index.html";
}