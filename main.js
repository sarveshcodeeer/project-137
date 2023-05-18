status1 = "" ;
objects = [] ; 
percent = "" ; 
function preload() {

    
}

function setup() {

   canvas =  createCanvas(380 , 380 )
canvas.center() ;
 video = createCapture(VIDEO) 
video.size(380 ,380)
video.hide()
coco = ml5.objectDetector('cocossd' , modelLoaded) ; 

function modelLoaded() {

    console.log("model has loaded") ; 
    status1  = true ; 
    
    }
}

function st() {


document.getElementById("stat").innerHTML = "Detecting Objects" ;
nam = document.getElementById("nam").value

function modelLoaded() {

console.log("model has loaded") ; 
status1  = true ; 

}
}

function draw() {

    image(video , 0 , 0 , 380 , 380)
    if(status1 != "") {

 coco.detect(video , gotResult) 
 for(var i=0 ; i < objects.length ; i++ ){

document.getElementById("stat").innerHTML = "Objects are being detected" ; 
document.getElementById("nod").innerHTML = "Number of objects detected are  " + objects.length ; 


percent = floor(objects[i].confidence*100) ; 
fill("red")
stroke("red") 
text(objects[i].label + " " + percent + " %" , objects[i].x + 15 , objects[i].y +15 )
noFill()
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height) ; 

if(nam==objects[i].label){

video.stop()
document.getElementById("stat").innerHTML = "Objects mentioned  detected" ;
var synth = window.speechSynthesis ; 
var sd = "objects mentioned found" 
var ut = new SpeechSynthesisUtterance(sd)
synth.speak(ut)

}
 }
    }


}

function gotResult(error , results) {

if(error){
    console.log(error)


}

else {

console.log(results) ; 
objects = results ; 
}
}

