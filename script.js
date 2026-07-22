"use strict";

const loadingScreen=document.getElementById("loadingScreen");
const scenes=[...document.querySelectorAll(".scene")];
const startButton=document.getElementById("startJourney");
const nextButton=document.getElementById("nextScene");
const questionButton=document.getElementById("openQuestion");
const yesButtons=[...document.querySelectorAll(".yes")];
const world=document.getElementById("world");
const memoryTree=document.getElementById("memoryTree");
const sceneOrder=["sceneIntro","sceneFlower","sceneTree","sceneQuestion","sceneFinish"];
const typeItems=[
{selector:"#sceneIntro p",text:"Сегодня я хочу показать тебе маленькую историю."},
{selector:"#sceneFlower p",text:"Иногда самые красивые истории начинаются с одного маленького шага."},
{selector:"#sceneTree .glassCard p",text:"Совсем скоро здесь появятся наши маленькие истории ❤️"},
{selector:"#sceneQuestion p",text:"Пойдёшь со мной на свидание?"}
];
const memoryMessages=[
"❤️ Мне нравится твоя улыбка.",
"🌸 С тобой любой день становится лучше.",
"☀️ Спасибо, что ты появилась в моей жизни.",
"💚 Это только начало нашей истории.",
"✨ Самое лучшее ещё впереди."
];
const dateInfo={
place:"Место пока остаётся маленьким секретом 🌿",
date:"Дата: скоро выберем вместе ❤️",
time:"Время: когда тебе будет удобно ✨"
};

let currentScene=0;
let typingTimer=null;
let envelopeOpened=false;
let nightActive=false;

function showScene(index){
if(index<0||index>=sceneOrder.length)return;
scenes.forEach(scene=>scene.classList.remove("active"));
const scene=document.getElementById(sceneOrder[index]);
if(!scene)return;
scene.classList.add("active");
currentScene=index;
setTimeout(typeCurrentScene,250);
}

function typeText(element,text,speed=30){
if(!element)return;
if(typingTimer)clearInterval(typingTimer);
element.textContent="";
let index=0;
typingTimer=setInterval(()=>{
element.textContent+=text[index]||"";
index++;
if(index>=text.length){
clearInterval(typingTimer);
typingTimer=null;
}
},speed);
}

function typeCurrentScene(){
const item=typeItems[currentScene];
if(!item)return;
const element=document.querySelector(item.selector);
if(element)typeText(element,item.text);
}

function magicFlash(){
if(!world||typeof world.animate!=="function")return;
world.animate(
[{filter:"brightness(1)"},{filter:"brightness(1.25)"},{filter:"brightness(1)"}],
{duration:500,easing:"ease-out"}
);
}

function sceneFlash(color){
const flash=document.createElement("div");
flash.style.cssText=`position:fixed;inset:0;background:${color};opacity:.35;pointer-events:none;z-index:99999;transition:opacity .7s ease`;
document.body.appendChild(flash);
requestAnimationFrame(()=>flash.style.opacity="0");
setTimeout(()=>flash.remove(),750);
}

function spark(x,y,count=16){
if(!world)return;
for(let i=0;i<count;i++){
const particle=document.createElement("div");
particle.className="spark";
particle.style.left=x+"px";
particle.style.top=y+"px";
particle.style.setProperty("--x",(Math.random()-.5)*180+"px");
particle.style.setProperty("--y",(Math.random()-.5)*180+"px");
world.appendChild(particle);
setTimeout(()=>particle.remove(),1100);
}
}

function createLeaf(){
if(!world)return;
const leaf=document.createElement("div");
leaf.className="leafItem";
leaf.textContent=["🍃","🌿","🍂"][Math.floor(Math.random()*3)];
leaf.style.left=Math.random()*100+"vw";
leaf.style.fontSize=18+Math.random()*18+"px";
leaf.style.animationDuration=8+Math.random()*8+"s";
world.appendChild(leaf);
setTimeout(()=>leaf.remove(),17000);
}

function createParticle(){
if(!world)return;
const particle=document.createElement("div");
particle.className="floatParticle";
particle.style.left=Math.random()*100+"vw";
particle.style.top=70+Math.random()*30+"vh";
particle.style.width=2+Math.random()*4+"px";
particle.style.height=particle.style.width;
world.appendChild(particle);
setTimeout(()=>particle.remove(),6500);
}

function createButterfly(){
if(!world)return;
const butterfly=document.createElement("div");
butterfly.className="butterfly";
butterfly.textContent="🦋";
butterfly.style.left="-60px";
butterfly.style.top=20+Math.random()*45+"vh";
butterfly.style.fontSize=22+Math.random()*20+"px";
butterfly.style.animationDuration=12+Math.random()*10+"s";
world.appendChild(butterfly);
setTimeout(()=>butterfly.remove(),24000);
}

function createPetal(){
if(!world)return;
const petal=document.createElement("div");
petal.className="petal";
petal.textContent=["🌸","🌺","💮"][Math.floor(Math.random()*3)];
petal.style.left=Math.random()*100+"vw";
petal.style.fontSize=16+Math.random()*14+"px";
world.appendChild(petal);
setTimeout(()=>petal.remove(),15000);
}

function heartRain(){
if(!world)return;
for(let i=0;i<75;i++){
const heart=document.createElement("div");
heart.className="heartRain";
heart.textContent=["❤️","💖","💕","💗","🌸"][Math.floor(Math.random()*5)];
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=18+Math.random()*32+"px";
heart.style.animationDuration=3+Math.random()*3+"s";
heart.style.animationDelay=Math.random()*1.2+"s";
world.appendChild(heart);
setTimeout(()=>heart.remove(),7000);
}
}

function sunset(){
document.documentElement.style.setProperty("--skyTop","#ffb66d");
document.documentElement.style.setProperty("--skyMiddle","#ff7b6d");
document.documentElement.style.setProperty("--skyBottom","#5d4568");
}

function nightMode(){
if(nightActive)return;
nightActive=true;
document.documentElement.style.setProperty("--skyTop","#08152e");
document.documentElement.style.setProperty("--skyMiddle","#13294d");
document.documentElement.style.setProperty("--skyBottom","#0a2418");
createFireflies();
}

function createFireflies(){
if(!world)return;
for(let i=0;i<90;i++){
const firefly=document.createElement("div");
firefly.className="firefly";
firefly.style.left=Math.random()*100+"vw";
firefly.style.top=Math.random()*100+"vh";
firefly.style.animationDelay=Math.random()*6+"s";
world.appendChild(firefly);
}
}

function createStars(){
if(!world)return;
for(let i=0;i<80;i++){
const star=document.createElement("div");
star.className="star";
star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*55+"vh";
star.style.animationDelay=Math.random()*4+"s";
world.appendChild(star);
}
}

function finalPetals(){
for(let i=0;i<55;i++){
const petal=document.createElement("div");
petal.className="finalPetal";
petal.textContent=["🌸","💗","✨","💕"][Math.floor(Math.random()*4)];
petal.style.left=45+Math.random()*10+"vw";
petal.style.top=45+Math.random()*10+"vh";
petal.style.fontSize=15+Math.random()*22+"px";
petal.style.setProperty("--finalX",(Math.random()-.5)*900+"px");
petal.style.setProperty("--finalY",(Math.random()-.5)*700+"px");
petal.style.animationDelay=Math.random()*.35+"s";
document.body.appendChild(petal);
setTimeout(()=>petal.remove(),3200);
}
}

function finalMessage(){
if(document.querySelector(".finalMessage"))return;
const box=document.createElement("div");
box.className="finalMessage";
box.innerHTML='<div class="finalMessageInner"><span>❤️</span><h2>Спасибо, что дошла до конца</h2><p>Надеюсь, эта маленькая история заставила тебя улыбнуться.</p><button type="button" id="restartStory">Посмотреть ещё раз</button></div>';
document.body.appendChild(box);
requestAnimationFrame(()=>box.classList.add("show"));
document.getElementById("restartStory")?.addEventListener("click",restartStory);
}

function restartStory(){
const message=document.querySelector(".finalMessage");
if(message){
message.classList.remove("show");
setTimeout(()=>message.remove(),500);
}
document.querySelectorAll(".firefly,.heartRain,.finalPetal,.forestAnimal").forEach(element=>element.remove());
document.documentElement.style.removeProperty("--skyTop");
document.documentElement.style.removeProperty("--skyMiddle");
document.documentElement.style.removeProperty("--skyBottom");
nightActive=false;
envelopeOpened=false;
const envelope=document.getElementById("envelope");
if(envelope)envelope.classList.remove("opened");
showScene(0);
window.scrollTo({top:0,behavior:"smooth"});
}

function createEnvelope(){
const inviteCard=document.querySelector("#sceneFinish .inviteCard");
if(!inviteCard)return;
inviteCard.innerHTML=`<div class="envelope" id="envelope"><div class="envelopeBack"></div><div class="letter"><span class="letterLabel">Для Евы ❤️</span><h3>Наше свидание</h3><p>${dateInfo.place}</p><p>${dateInfo.date}</p><p>${dateInfo.time}</p><span class="letterHint">Нажми на конверт</span></div><div class="envelopeFront"></div><div class="envelopeFlap"></div><div class="heartSeal">❤️</div></div>`;
const envelope=document.getElementById("envelope");
if(!envelope)return;
envelope.addEventListener("click",()=>{
if(envelopeOpened)return;
envelopeOpened=true;
envelope.classList.add("opened");
const rect=envelope.getBoundingClientRect();
spark(rect.left+rect.width/2,rect.top+rect.height/2,30);
finalPetals();
setTimeout(finalMessage,1300);
});
}

function spawnAnimal(){
if(!world||currentScene===4)return;
const animal=document.createElement("div");
animal.className="forestAnimal";
animal.textContent=Math.random()<.5?"🐸":"🐷";
animal.style.left=5+Math.random()*88+"vw";
animal.style.bottom=5+Math.random()*12+"vh";
animal.style.fontSize=34+Math.random()*22+"px";
world.appendChild(animal);
animal.addEventListener("click",event=>{
event.stopPropagation();
const rect=animal.getBoundingClientRect();
spark(rect.left+rect.width/2,rect.top+rect.height/2);
if(typeof animal.animate==="function"){
animal.animate(
[{transform:"scale(1)",opacity:1},{transform:"scale(1.5) rotate(15deg)",opacity:1},{transform:"scale(0)",opacity:0}],
{duration:700,fill:"forwards"}
);
}
setTimeout(()=>animal.remove(),700);
});
setTimeout(()=>{
if(!animal.isConnected)return;
if(typeof animal.animate==="function"){
animal.animate([{opacity:1},{opacity:0}],{duration:900,fill:"forwards"});
}
setTimeout(()=>animal.remove(),900);
},9000);
}

function handleButtonSpark(event){
spark(event.clientX,event.clientY);
}

startButton?.addEventListener("click",event=>{
handleButtonSpark(event);
sceneFlash("#dfffe8");
magicFlash();
showScene(1);
});

nextButton?.addEventListener("click",event=>{
handleButtonSpark(event);
sceneFlash("#fff0c7");
magicFlash();
sunset();
showScene(2);
});

questionButton?.addEventListener("click",event=>{
handleButtonSpark(event);
sceneFlash("#ffd9ef");
magicFlash();
showScene(3);
});

yesButtons.forEach(button=>{
button.addEventListener("click",event=>{
handleButtonSpark(event);
sceneFlash("#ffe2e2");
magicFlash();
heartRain();
const title=document.querySelector("#sceneFinish h1");
const text=document.querySelector("#sceneFinish .glassCard>p");
if(title)title.textContent="Для тебя приготовлен маленький сюрприз ❤️";
if(text)text.textContent="Открой конверт и узнай подробности нашего свидания.";
setTimeout(()=>{
nightMode();
showScene(4);
},700);
});
});

memoryTree?.addEventListener("click",()=>{
const text=document.querySelector("#sceneTree .glassCard p");
if(text)text.textContent=memoryMessages[Math.floor(Math.random()*memoryMessages.length)];
const rect=memoryTree.getBoundingClientRect();
spark(rect.left+rect.width/2,rect.top+rect.height/2);
});

memoryTree?.addEventListener("keydown",event=>{
if(event.key==="Enter"||event.key===" "){
event.preventDefault();
memoryTree.click();
}
});

const cursorLight=document.createElement("div");
cursorLight.className="cursorLight";
document.body.appendChild(cursorLight);

document.addEventListener("pointermove",event=>{
cursorLight.style.left=event.clientX+"px";
cursorLight.style.top=event.clientY+"px";
});

document.addEventListener("pointerdown",()=>cursorLight.classList.add("pressed"));
document.addEventListener("pointerup",()=>cursorLight.classList.remove("pressed"));
document.addEventListener("pointercancel",()=>cursorLight.classList.remove("pressed"));

window.addEventListener("load",()=>{
setTimeout(()=>{
if(loadingScreen)loadingScreen.style.display="none";
showScene(0);
},1800);
});

createEnvelope();
createStars();

setInterval(createLeaf,700);
setInterval(createParticle,180);
setInterval(createButterfly,6500);
setInterval(createPetal,2500);
setInterval(spawnAnimal,12000);

setInterval(()=>{
const wind=(Math.random()*2-1)*8;
document.documentElement.style.setProperty("--wind",wind+"deg");
},3500);
