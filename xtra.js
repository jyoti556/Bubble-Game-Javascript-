let sc=0;
let time=30;
let val=0;

function createBubble(){
let panel=''
let bottom=document.querySelector(".panelbtm")
for(i=1;i<=198;i++){
    panel+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}
bottom.innerHTML=panel;
}

function runTime(){
    let timing =setInterval(function(){
        if(time>0){
        time--
        document.querySelector("#timeint").textContent=time;
        }
        else{
            clearInterval(timing);
          let newElement=document.createElement("div");
          newElement.className="styling";
          newElement.innerHTML="GAME OVER!"
          document.querySelector(".panelbtm").innerHTML="";
          document.querySelector(".panelbtm").appendChild(newElement); 
          

        }
    },1000)
    
}

function hitValue(){
    val=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=val;
}

function scoreValue(){
sc+=10;
document.querySelector("#scoreval").textContent=sc;
}

document.querySelector(".panelbtm").addEventListener("click",function(details){
   let hitno= Number.parseInt(details.target.textContent)
   if(val===hitno){
    scoreValue();
    createBubble();
    hitValue();
    
   }
})
createBubble()
hitValue()
document.querySelector(".panelbtm").addEventListener("click",runTime);
