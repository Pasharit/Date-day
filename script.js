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
/*======================
WORLD LIFE
======================*/

let wind=0;

setInterval(()=>{

wind=(Math.random()*2-1)*8;

document.documentElement.style.setProperty("--wind",wind+"deg");

},3500);

/*======================
TREES MOVE
======================*/

setInterval(()=>{

document.querySelectorAll(".tree").forEach((t,i)=>{

t.animate([

{transform:`rotate(${wind*.2+i*.15}deg)`},

{transform:`rotate(${wind*.55+i*.15}deg)`},

{transform:`rotate(${wind*.2+i*.15}deg)`}

],{

duration:3000+Math.random()*2000,

iterations:1,

fill:"forwards"

});

});

},3200);

/*======================
MEMORY TREE
======================*/

const memoryMessages=[

"❤️ Мне нравится твоя улыбка.",

"🌸 С тобой любой день становится лучше.",

"☀️ Спасибо, что ты появилась в моей жизни.",

"💚 Это только начало нашей истории.",

"✨ Самое лучшее ещё впереди."

];

const memoryTree=document.getElementById("memoryTree");

if(memoryTree){

memoryTree.addEventListener("click",()=>{

const card=document.querySelector("#sceneTree .glassCard p");

if(card){

card.innerHTML=memoryMessages[Math.floor(Math.random()*memoryMessages.length)];

}

spark(

window.innerWidth/2,

window.innerHeight/2

);

});

}

/*======================
STARS
======================*/

function star(){

const s=document.createElement("div");

s.className="star";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*55+"vh";

s.style.animationDelay=Math.random()*4+"s";

world.appendChild(s);

}

for(let i=0;i<80;i++)star();

/*======================
SMOOTH CAMERA
======================*/

function cameraPulse(){

world.animate([

{transform:"scale(1)"},

{transform:"scale(1.01)"},

{transform:"scale(1)"}

],{

duration:8000,

iterations:Infinity

});

}

cameraPulse();

/*======================
BUTTON SOUND READY
======================*/

const clickAudio=new Audio();

const ambientAudio=new Audio();

clickAudio.preload="auto";

ambientAudio.loop=true;

function playClick(){

if(clickAudio.src){

clickAudio.currentTime=0;

clickAudio.play();

}

}

document.querySelectorAll("button").forEach(b=>{

b.addEventListener("click",playClick);

});

/*======================
SCENE EFFECT
======================*/

function sceneFlash(color){

const d=document.createElement("div");

d.style.position="fixed";

d.style.inset=0;

d.style.background=color;

d.style.opacity=".4";

d.style.pointerEvents="none";

d.style.zIndex="99999";

d.style.transition=".8s";

document.body.appendChild(d);

setTimeout(()=>d.style.opacity="0",50);

setTimeout(()=>d.remove(),900);

}

startButton.addEventListener("click",()=>sceneFlash("#dfffe8"));

nextButton.addEventListener("click",()=>sceneFlash("#fff0c7"));

questionButton.addEventListener("click",()=>sceneFlash("#ffd9ef"));

yesButtons.forEach(b=>b.addEventListener("click",()=>sceneFlash("#ffe2e2")));

/*======================
AUTO AMBIENCE
======================*/

window.addEventListener("focus",()=>{

if(ambientAudio.src)ambientAudio.play().catch(()=>{});

});

window.addEventListener("blur",()=>{

ambientAudio.pause();

});
/*======================
DATE DATA
======================*/
const dateInfo={
place:"Место пока остаётся маленьким секретом 🌿",
date:"Дата: скоро выберем вместе ❤️",
time:"Время: когда тебе будет удобно ✨"
};

/*======================
FINISH CARD
======================*/
const finishScene=document.getElementById("sceneFinish");
const inviteCard=finishScene?finishScene.querySelector(".inviteCard"):null;

if(inviteCard){
inviteCard.innerHTML=`
<div class="envelope" id="envelope">
<div class="envelopeBack"></div>
<div class="letter">
<span class="letterLabel">Для Евы ❤️</span>
<h3>Наше свидание</h3>
<p>${dateInfo.place}</p>
<p>${dateInfo.date}</p>
<p>${dateInfo.time}</p>
<span class="letterHint">Нажми на конверт</span>
</div>
<div class="envelopeFront"></div>
<div class="envelopeFlap"></div>
<div class="heartSeal">❤️</div>
</div>
`;
}

/*======================
OPEN ENVELOPE
======================*/
const envelope=document.getElementById("envelope");
let envelopeOpened=false;

if(envelope){
envelope.addEventListener("click",()=>{
if(envelopeOpened)return;
envelopeOpened=true;
envelope.classList.add("opened");
spark(window.innerWidth/2,window.innerHeight/2);
finalPetals();
setTimeout(finalMessage,1300);
});
}

/*======================
FINAL PETALS
======================*/
function finalPetals(){
for(let i=0;i<55;i++){
const p=document.createElement("div");
p.className="finalPetal";
p.innerHTML=["🌸","💗","✨","💕"][Math.floor(Math.random()*4)];
p.style.left=45+Math.random()*10+"vw";
p.style.top=45+Math.random()*10+"vh";
p.style.fontSize=15+Math.random()*22+"px";
p.style.setProperty("--finalX",(Math.random()-.5)*900+"px");
p.style.setProperty("--finalY",(Math.random()-.5)*700+"px");
p.style.animationDelay=Math.random()*.35+"s";
document.body.appendChild(p);
setTimeout(()=>p.remove(),3200);
}
}

/*======================
FINAL MESSAGE
======================*/
function finalMessage(){
const old=document.querySelector(".finalMessage");
if(old)return;
const box=document.createElement("div");
box.className="finalMessage";
box.innerHTML=`
<div class="finalMessageInner">
<span>❤️</span>
<h2>Спасибо, что дошла до конца</h2>
<p>Надеюсь, эта маленькая история заставила тебя улыбнуться.</p>
<button id="restartStory">Посмотреть ещё раз</button>
</div>
`;
document.body.appendChild(box);
requestAnimationFrame(()=>box.classList.add("show"));
document.getElementById("restartStory").addEventListener("click",restartStory);
}

/*======================
RESTART
======================*/
function restartStory(){
const message=document.querySelector(".finalMessage");
if(message){
message.classList.remove("show");
setTimeout(()=>message.remove(),500);
}
if(envelope){
envelope.classList.remove("opened");
envelopeOpened=false;
}
document.querySelectorAll(".firefly").forEach(f=>f.remove());
document.documentElement.style.removeProperty("--skyTop");
document.documentElement.style.removeProperty("--skyMiddle");
document.documentElement.style.removeProperty("--skyBottom");
showScene(0);
window.scrollTo({top:0,behavior:"smooth"});
}

/*======================
FINISH TITLE
======================*/
yesButtons.forEach(button=>{
button.addEventListener("click",()=>{
setTimeout(()=>{
const title=document.querySelector("#sceneFinish h2");
const text=document.querySelector("#sceneFinish>p,#sceneFinish .glassCard>p");
if(title)title.textContent="Для тебя приготовлен маленький сюрприз";
if(text)text.textContent="Открой конверт и узнай подробности нашего свидания.";
},800);
});
});

/*======================
CURSOR LIGHT
======================*/
const cursorLight=document.createElement("div");
cursorLight.className="cursorLight";
document.body.appendChild(cursorLight);

document.addEventListener("pointermove",e=>{
cursorLight.style.left=e.clientX+"px";
cursorLight.style.top=e.clientY+"px";
});

document.addEventListener("pointerdown",()=>{
cursorLight.classList.add("pressed");
});

document.addEventListener("pointerup",()=>{
cursorLight.classList.remove("pressed");
});

/*======================
VISIBILITY
======================*/
document.addEventListener("visibilitychange",()=>{
if(document.hidden){
ambientAudio.pause();
}else if(ambientAudio.src){
ambientAudio.play().catch(()=>{});
}
});0
/*======================
ENVELOPE
======================*/
.envelope{
position:relative;
width:min(430px,88vw);
height:280px;
margin:25px auto 0;
cursor:pointer;
perspective:1000px;
filter:drop-shadow(0 25px 35px rgba(0,0,0,.3));
}
.envelopeBack{
position:absolute;
inset:0;
border-radius:18px;
background:linear-gradient(145deg,#f5e8cf,#d9c49f);
border:1px solid rgba(255,255,255,.45);
z-index:1;
}
.envelopeFront{
position:absolute;
inset:0;
z-index:4;
border-radius:18px;
overflow:hidden;
background:
linear-gradient(32deg,transparent 49%,#dac59f 50%) left/50% 100% no-repeat,
linear-gradient(-32deg,transparent 49%,#ead9b9 50%) right/50% 100% no-repeat,
linear-gradient(to top,#dfcaa5 0 54%,transparent 55%);
pointer-events:none;
}
.envelopeFlap{
position:absolute;
left:0;
top:0;
width:100%;
height:58%;
z-index:5;
transform-origin:top;
transition:transform .9s cubic-bezier(.2,.75,.2,1),z-index .1s .4s;
clip-path:polygon(0 0,100% 0,50% 100%);
background:linear-gradient(160deg,#f8ecd6,#d8bf94);
border-radius:18px 18px 0 0;
}
.heartSeal{
position:absolute;
left:50%;
top:46%;
z-index:7;
font-size:38px;
transform:translate(-50%,-50%);
transition:.45s;
filter:drop-shadow(0 5px 8px rgba(120,20,40,.3));
animation:sealPulse 1.8s ease-in-out infinite;
}
@keyframes sealPulse{
0%,100%{transform:translate(-50%,-50%) scale(1);}
50%{transform:translate(-50%,-50%) scale(1.14);}
}

/*======================
LETTER
======================*/
.letter{
position:absolute;
left:6%;
bottom:6%;
width:88%;
height:88%;
z-index:2;
padding:25px 24px;
border-radius:16px;
text-align:center;
color:#46382f;
background:
linear-gradient(rgba(255,255,255,.9),rgba(255,249,232,.95)),
repeating-linear-gradient(0deg,transparent 0 27px,rgba(100,130,100,.1) 28px);
box-shadow:0 10px 30px rgba(0,0,0,.18);
transition:transform 1s cubic-bezier(.2,.8,.2,1),height 1s;
overflow:hidden;
}
.letterLabel{
display:inline-block;
font-size:.82rem;
font-weight:700;
letter-spacing:.08em;
text-transform:uppercase;
opacity:.7;
}
.letter h3{
margin:12px 0 16px;
font-size:clamp(1.45rem,4vw,2rem);
}
.letter p{
margin:9px 0;
font-size:clamp(.93rem,2.8vw,1.05rem);
line-height:1.5;
}
.letterHint{
display:block;
margin-top:17px;
font-size:.8rem;
opacity:.55;
}

/*======================
OPENED ENVELOPE
======================*/
.envelope.opened{
cursor:default;
}
.envelope.opened .envelopeFlap{
transform:rotateX(180deg);
z-index:0;
}
.envelope.opened .heartSeal{
opacity:0;
transform:translate(-50%,-80%) scale(.3);
}
.envelope.opened .letter{
transform:translateY(-145px);
height:330px;
z-index:6;
}
.envelope.opened .letterHint{
display:none;
}

/*======================
FINAL PETALS
======================*/
.finalPetal{
position:fixed;
z-index:100000;
pointer-events:none;
animation:finalPetalFly 2.8s ease-out forwards;
}
@keyframes finalPetalFly{
0%{
transform:translate(0,0) rotate(0) scale(.4);
opacity:0;
}
15%{opacity:1;}
100%{
transform:translate(var(--finalX),var(--finalY)) rotate(720deg) scale(1.25);
opacity:0;
}
}

/*======================
FINAL MESSAGE
======================*/
.finalMessage{
position:fixed;
inset:0;
z-index:99999;
display:grid;
place-items:center;
padding:20px;
background:rgba(5,16,28,.72);
backdrop-filter:blur(14px);
opacity:0;
visibility:hidden;
transition:.5s;
}
.finalMessage.show{
opacity:1;
visibility:visible;
}
.finalMessageInner{
width:min(520px,92vw);
padding:40px 32px;
text-align:center;
border-radius:28px;
color:#fff;
background:linear-gradient(145deg,rgba(255,255,255,.19),rgba(255,255,255,.08));
border:1px solid rgba(255,255,255,.25);
box-shadow:0 30px 90px rgba(0,0,0,.45);
transform:translateY(35px) scale(.92);
transition:.65s cubic-bezier(.2,.8,.2,1);
}
.finalMessage.show .finalMessageInner{
transform:translateY(0) scale(1);
}
.finalMessageInner>span{
display:block;
font-size:55px;
animation:finalHeart 1.7s ease-in-out infinite;
}
.finalMessageInner h2{
margin:15px 0 12px;
font-size:clamp(1.7rem,6vw,2.6rem);
}
.finalMessageInner p{
margin:0 auto 25px;
max-width:390px;
line-height:1.65;
color:rgba(255,255,255,.86);
}
.finalMessageInner button{
padding:14px 26px;
border:0;
border-radius:999px;
font:inherit;
font-weight:700;
color:#24442d;
background:linear-gradient(135deg,#fff8d4,#d4ffd9);
cursor:pointer;
box-shadow:0 12px 35px rgba(0,0,0,.25);
transition:.3s;
}
.finalMessageInner button:hover{
transform:translateY(-3px) scale(1.03);
}
@keyframes finalHeart{
0%,100%{transform:scale(1);}
50%{transform:scale(1.2);}
}

/*======================
CURSOR LIGHT
======================*/
.cursorLight{
position:fixed;
left:-100px;
top:-100px;
width:220px;
height:220px;
border-radius:50%;
z-index:9998;
pointer-events:none;
transform:translate(-50%,-50%);
background:radial-gradient(circle,rgba(255,255,210,.13),transparent 68%);
mix-blend-mode:screen;
transition:width .25s,height .25s;
}
.cursorLight.pressed{
width:150px;
height:150px;
}

/*======================
MOBILE
======================*/
@media(max-width:600px){
.envelope{height:230px;margin-top:15px;}
.letter{padding:19px 14px;}
.letter h3{margin:8px 0 10px;}
.letter p{margin:5px 0;}
.envelope.opened .letter{
transform:translateY(-115px);
height:285px;
}
.heartSeal{font-size:31px;}
.finalMessageInner{padding:32px 20px;}
.cursorLight{display:none;}
}
/*======================
FOREST ANIMALS
======================*/

const animals=["🐸","🐷"];

function spawnAnimal(){

const a=document.createElement("div");

a.className="forestAnimal";

a.innerHTML=animals[Math.floor(Math.random()*animals.length)];

a.style.left=Math.random()*90+5+"vw";

a.style.bottom=(5+Math.random()*12)+"vh";

a.style.fontSize=(34+Math.random()*22)+"px";

world.appendChild(a);

a.addEventListener("click",()=>{

spark(
a.getBoundingClientRect().left+20,
a.getBoundingClientRect().top+20
);

a.animate([
{transform:"scale(1)"},
{transform:"scale(1.5) rotate(15deg)"},
{transform:"scale(0)",opacity:0}
],{
duration:700,
fill:"forwards"
});

setTimeout(()=>a.remove(),700);

});

setTimeout(()=>{

if(a.parentNode){

a.animate([
{opacity:1},
{opacity:0}
],{
duration:1000,
fill:"forwards"
});

setTimeout(()=>a.remove(),1000);

}

},9000);

}

setInterval(spawnAnimal,12000);
