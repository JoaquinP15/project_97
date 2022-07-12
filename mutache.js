nose_x = 0
nose_y = 0

function preload(){
    mutache = loadImage('https://th.bing.com/th/id/R.055773ab22b1d882b4ec239a6ea2d646?rik=NMFEU33D68DNDQ&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fLTd%2fjLj%2fLTdjLjrXc.png&ehk=b5RKHGSn8%2b%2bz%2bv001NyPrK8r9G0mWmHaqqpi9ZjaNVc%3d&risl=&pid=ImgRaw&r=0');
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

        nose_x = results[0].pose.nose.x - 10;
        nose_y = results[0].pose.nose.y - 10;
    }
}

function draw(){
    image(video,0, 0, 300, 250);
    image(mutache, nose_x, nose_y, 30, 45);
}

function take_snapshot(){
    save('Image.png');
}

function nextfilter(){
    window.location = "clown_nose.html";
}

function back(){
    window.location = "index.html";
}