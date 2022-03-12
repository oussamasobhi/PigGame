'use strict';
const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const dicel=document.querySelector('.dice');
const newgame=document.querySelector('.btn--new');
let roll=document.querySelector('.btn--roll');
let playing=true;
const btnhold=document.querySelector('.btn--hold');
let current0=document.querySelector('#current--0');
let current1=document.querySelector('#current--1');
console.log(dicel);
score0.textContent='0';
score1.textContent='0';
dicel.classList.add('hidden');

let scores=[0,0]; 
let currentscore=0;
let activeplayer=0;

const rolldice= function(){
  if(playing){
  const dice=Math.trunc(Math.random()*6)+1;
  dicel.classList.remove('hidden');
  dicel.src=`dice-${dice}.png`;
  if(dice==1){
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    
    document.getElementById(`current--${activeplayer}`).textContent=0;  
   activeplayer=activeplayer===0?1:0;
   document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
   currentscore=0;
  }
  else{
    currentscore+=dice;
    document.getElementById(`current--${activeplayer}`).textContent=currentscore;
  }
}
}
roll.addEventListener('click',rolldice);

btnhold.addEventListener('click',function(){
  if(playing){
  scores[activeplayer]+=currentscore;
  document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];

   if(scores[activeplayer]>=100){
     document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
     document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    playing=false;

   }


else{

  document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    document.getElementById(`current--${activeplayer}`).textContent=0;  
   activeplayer=activeplayer===0?1:0;
   document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
   currentscore=0;
}
  }
});

newgame.addEventListener('click',function(){
  
  score0.textContent='0';
  score1.textContent='0';
  playing=true;
   currentscore=0;
   scores=[0,0]; 
   document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
   document.querySelector('.player--0').classList.add('player--active');
   document.querySelector('.player--1').classList.remove('player--active');
   document.querySelector('.dice').classList.add('hidden');
   current0.textContent='0';
   current1.textContent='0'; 
   activeplayer=0;
});