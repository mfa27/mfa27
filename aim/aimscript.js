var b = document.querySelector("button");
var score = document.getElementById('score');
var counter = 0;
var btn = document.getElementById("button");
var tensec = document.getElementById("10sec");
var pxs = document.getElementsByClassName('div');
var scr = document.getElementById("scr");
var mis = document.getElementById("mis");
var htm = document.getElementById("htm");
var missc = 0;
var height1 = 100;
var width1 = 100;
var theLeftSide = document.getElementById("theLeftSide");
var resetbtn = document.getElementById("reset");
var vr = document.getElementById("vr");
var hit = 1080;
var fontsize = 25;

b.addEventListener("click",change);
b.addEventListener("click", plus);
htm.addEventListener("click", miss);
pxs[0].addEventListener("click", plussize);
pxs[1].addEventListener("click", minesize);
theLeftSide.addEventListener("click" , leftsclick);
b.addEventListener("click", misscmines);
resetbtn.addEventListener("click" , resetall);

function plussize() {
height1 += 10;
width1 += 10;    
missc++
missc + 1
missc--
fontsize += 3;

b.style.fontSize = fontsize + "px";
b.style.height = height1 + "px";
   b.style.width = width1 + "px";
missc - 1;
}

function minesize() {
height1 -= 10;
width1 -= 10;
missc++
missc + 1
missc--
fontsize -= 3;

b.style.fontSize = fontsize + "px";
b.style.height = height1 + "px";
   b.style.width = width1 + "px";
missc - 1;
}

function miss() {
    missc++
    mis.innerHTML = missc - counter;

}
setTimeout(tkbyr(),240000);

setInterval(function (){
var misc = missc - counter;

 document.getElementById("10sec").innerHTML += "<li style='font-family: 'Roboto Mono', monospace; font-size: 20px ; color: white; user-select: none'>  " + counter + "-" + misc + "</li>";
}
, 10000);
 

function change()
{
    var i = Math.floor(Math.random()*1100)+1;
    var j = Math.floor(Math.random()*250)+1;
    var r = Math.floor(Math.random()*-1100)+1;


    b.style.left = i+"px";
    b.style.top = j+"px";
    b.style.right = r+"px";
    
}

function plus() {
    missc--
    missc - 1
  counter++;
  scr.textContent = counter;

}

function leftsclick(){
    missc--
    missc - 1
}

function misscmines() {
    missc++
    missc + 1
}

function resetall(){
    window.location.reload(true);
}

function tkbyr(){
setInterval(function(){
var h = tensec.offsetHeight + theLeftSide.offsetHeight - 531    ;
 vr.style.height = h + "px";}, 10000);

}
