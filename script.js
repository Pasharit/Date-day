/*==================================================

DATE FOR EVA
SCRIPT.JS
PART 1

==================================================*/

"use strict";

/*========================

ЭЛЕМЕНТЫ

========================*/

const loadingScreen = document.getElementById("loadingScreen");

const scenes = document.querySelectorAll(".scene");

const startButton = document.getElementById("startJourney");

const nextButton = document.getElementById("nextScene");

const questionButton = document.getElementById("openQuestion");

const yesButtons = document.querySelectorAll(".yes");

const world = document.getElementById("world");

/*========================

ТЕКУЩАЯ СЦЕНА

========================*/

let currentScene = 0;

/*========================

МАССИВ СЦЕН

========================*/

const sceneOrder = [

"sceneIntro",

"sceneFlower",

"sceneTree",

"sceneQuestion",

"sceneFinish"

];

/*========================

ПОКАЗАТЬ СЦЕНУ

========================*/

function showScene(index){

scenes.forEach(scene=>{

scene.classList.remove("active");

});

const next=document.getElementById(sceneOrder[index]);

if(next){

next.classList.add("active");

currentScene=index;

}

}

/*========================

ЗАГРУЗКА

========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

loadingScreen.style.display="none";

showScene(0);

},2500);

});

/*========================

КНОПКА НАЧАТЬ

========================*/

startButton.addEventListener("click",()=>{

showScene(1);

magicFlash();

});

/*========================

ДАЛЬШЕ

========================*/

nextButton.addEventListener("click",()=>{

showScene(2);

magicFlash();

});

/*========================

ВОПРОС

========================*/

questionButton.addEventListener("click",()=>{

showScene(3);

magicFlash();

});

/*========================

ДА

========================*/

yesButtons.forEach(button=>{

button.addEventListener("click",()=>{

magicFlash();

setTimeout(()=>{

showScene(4);

},700);

});

});

/*========================

МАГИЧЕСКАЯ ВСПЫШКА

========================*/

function magicFlash(){

world.animate(

[

{

filter:"brightness(1)"

},

{

filter:"brightness(1.3)"

},

{

filter:"brightness(1)"

}

],

{

duration:500

}

);

}
/*======================
LEAVES
======================*/

function createLeaf(){
const l=document.createElement("div");
l.className="leafItem";
l.innerHTML=["🍃","🌿","🍂"][Math.floor(Math.random()*3)];
l.style.left=Math.random()*100+"vw";
l.style.fontSize=(18+Math.random()*18)+"px";
l.style.animationDuration=(8+Math.random()*8)+"s";
world.appendChild(l);
setTimeout(()=>l.remove(),17000);
}
setInterval(createLeaf,500);

/*======================
PARTICLES
======================*/

function createParticle(){
const p=document.createElement("div");
p.className="floatParticle";
p.style.left=Math.random()*100+"vw";
p.style.top=(70+Math.random()*30)+"vh";
p.style.width=(2+Math.random()*4)+"px";
p.style.height=p.style.width;
world.appendChild(p);
setTimeout(()=>p.remove(),6000);
}
setInterval(createParticle,120);

/*======================
BUTTERFLIES
======================*/

function butterfly(){
const b=document.createElement("div");
b.className="butterfly";
b.innerHTML="🦋";
b.style.left="-60px";
b.style.top=(20+Math.random()*45)+"vh";
b.style.fontSize=(22+Math.random()*20)+"px";
b.style.animationDuration=(12+Math.random()*10)+"s";
world.appendChild(b);
setTimeout(()=>b.remove(),24000);
}
setInterval(butterfly,6000);

/*======================
FLOWERS
======================*/

function petal(){
const p=document.createElement("div");
p.className="petal";
p.innerHTML=["🌸","🌺","💮"][Math.floor(Math.random()*3)];
p.style.left=Math.random()*100+"vw";
p.style.fontSize=(16+Math.random()*14)+"px";
world.appendChild(p);
setTimeout(()=>p.remove(),15000);
}
setInterval(petal,2200);

/*======================
MAGIC
======================*/

function spark(x,y){

for(let i=0;i<16;i++){

const s=document.createElement("div");

s.className="spark";

s.style.left=x+"px";

s.style.top=y+"px";

s.style.setProperty("--x",(Math.random()-.5)*180+"px");

s.style.setProperty("--y",(Math.random()-.5)*180+"px");

world.appendChild(s);

setTimeout(()=>s.remove(),1000);

}

}

/*======================
BUTTON SPARK
======================*/

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",e=>{

spark(

e.clientX,

e.clientY

);

});

});
/*======================
TYPE WRITER
======================*/

const typeItems=[
{el:"#sceneIntro p",txt:"Сегодня я хочу показать тебе маленькую историю..."},
{el:"#sceneFlower p",txt:"Иногда самые красивые истории начинаются с одного маленького шага."},
{el:"#sceneTree p",txt:"Совсем скоро здесь появятся наши маленькие истории ❤️"},
{el:"#sceneQuestion p",txt:"Пойдешь со мной на свидание?"}
];

function typeText(el,text,speed=35){

el.innerHTML="";

let i=0;

const t=setInterval(()=>{

el.innerHTML+=text[i];

i++;

if(i>=text.length)clearInterval(t);

},speed);

}

function typeCurrent(){

const obj=typeItems[currentScene];

if(!obj)return;

const e=document.querySelector(obj.el);

if(e)typeText(e,obj.txt);

}

window.addEventListener("load",()=>{

setTimeout(typeCurrent,2600);

});

/*======================
OVERRIDE SHOWSCENE
======================*/

const oldShowScene=showScene;

showScene=function(i){

oldShowScene(i);

setTimeout(typeCurrent,300);

};

/*======================
HEART RAIN
======================*/

function heartRain(){

for(let i=0;i<90;i++){

const h=document.createElement("div");

h.className="heartRain";

h.innerHTML=["❤️","💖","💕","💗","🌸"][Math.floor(Math.random()*5)];

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(18+Math.random()*34)+"px";

h.style.animationDuration=(3+Math.random()*3)+"s";

h.style.animationDelay=(Math.random()*1.2)+"s";

world.appendChild(h);

setTimeout(()=>h.remove(),7000);

}

}

/*======================
YES BUTTON
======================*/

yesButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

heartRain();

setTimeout(()=>{

nightMode();

},900);

});

});

/*======================
SUNSET
======================*/

function sunset(){

document.documentElement.style.setProperty("--skyTop","#ffb66d");

document.documentElement.style.setProperty("--skyMiddle","#ff7b6d");

document.documentElement.style.setProperty("--skyBottom","#5d4568");

}

/*======================
NIGHT
======================*/

function nightMode(){

document.documentElement.style.setProperty("--skyTop","#08152e");

document.documentElement.style.setProperty("--skyMiddle","#13294d");

document.documentElement.style.setProperty("--skyBottom","#0a2418");

fireflies();

}

/*======================
FIREFLIES
======================*/

function fireflies(){

for(let i=0;i<120;i++){

const f=document.createElement("div");

f.className="firefly";

f.style.left=Math.random()*100+"vw";

f.style.top=Math.random()*100+"vh";

f.style.animationDelay=(Math.random()*6)+"s";

world.appendChild(f);

}

}

/*======================
AUTO SUNSET
======================*/

nextButton.addEventListener("click",()=>{

setTimeout(sunset,400);

});
