nose_x = 0
nose_y = 0

function preload(){
    pig_nose = loadImage('https://th.bing.com/th/id/R.2f13e36c8c388d2ea2c37b0adcfb8324?rik=OcYIjYHvZCuD2A&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-animals-nature%2f512%2f22238-pig-nose-icon.png&ehk=bAqHjCswq6piwJbyUaZHIUXFMeeUKa1PeU6vJnq%2fisM%3d&risl=&pid=ImgRaw&r=0');
}

function setup(){
    canvas = createCanvas(300,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 250);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose_x ="+ results[0].pose.nose.x);
        console.log("nose_y ="+ results[0].pose.nose.y);

        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 7;
    }
}

function draw(){
    image(video,0, 0, 300, 250);
    image(pig_nose, nose_x, nose_y, 35, 35);
}

function take_snapshot(){
    save('Image.png');
}

function back(){
    window.location = "index.html";
}