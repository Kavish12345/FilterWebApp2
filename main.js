


function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    
}
function take_snapshot(){
    save('filter.png');
}

function draw(){
    image(video,0,0,400,400);
    
}


function gotResult(results){
if(results.length > 0){
    console.log(results);
    console.log("Nose X ="+nosex);
    console.log("Nose Y ="+nosey);
}
}
