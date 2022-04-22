x=0;
y=0;
dcircle="";
drec="";
function setup() {
    canvas=createCanvas(900, 600)
}
var sr=window.WebkitSpeechRecognition; 
var rec= new sr();

function start() {
document.getElementById("status").innerHTML="System is listening please speak";
rec.start();
}

rec.onresult=function(event) {
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Seech has been recognised as: "+content;
    if(content=="circle") {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        dcircle="set";
    }
    if(content=="rectangle") {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        drec="set";
    }

}
function draw() {
    if(dcircle=="set"){
      radius=Math.floor(Math.random()*100);
      circle(x, y, radius)
      document.getElementById("status").innerHTML="circle is drawn";
      dcircle="";
    }
    if(drec=="set"){
        radius=Math.floor(Math.random()*100);
        rect(x, y, 70, 50)
        document.getElementById("status").innerHTML="rectangle is drawn";
        drec="";
      }
}