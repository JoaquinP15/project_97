lips_x = 0
lips_y = 0

function preload(){
    lips = loadImage('https://th.bing.com/th/id/R.9f621e2292b03b06bb66e680ca771fad?rik=KxaF1XSI0RTNqw&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f10%2fPNGPIX-COM-Lips-PNG-Transparent-Image-1.png&ehk=2a7X0b3QfULr6q6UpKmdQkYURiO4U1gKZsLyLgL3F0Y%3d&risl=&pid=ImgRaw&r=0');
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

function modelLoaded(){
    console.log("posenet is initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("lips_x ="+ results[0].pose.lips.x);
        console.log("lips_y ="+ results[0].pose.lips.y);

        lips_x = results[0].pose.lips.x - 10;
        lips_y = results[0].pose.lips.y - 10;
    }
}

function draw(){
    image(video,0, 0, 300, 250);
    image(lips, lips_x, lips_y, 30, 35);
}

function take_snapshot(){
    save('Image.png');
}

function nextfilter(){
    window.location = "mutache.html";
}