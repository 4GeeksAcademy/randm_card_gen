import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here
  const palos = ['spade','club','heart','diamond'];
  const simbolos ={
    'spade':'♠',
    'club':'♣',
    'heart':'♥',
    'diamond':'♦'
  };
const valores = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

const paloValue = Math.floor(Math.random()*4);
const chosenvalue = Math.floor(Math.random()*13);
const palo = palos[paloValue];
const simbolo = simbolos[palo];
const valor = valores[chosenvalue];

const divcarta = document.getElementById('carta');
divcarta.className = `card ${palo}`;
document.getElementById('top-left').innerHTML=`${simbolo}`;
document.getElementById('center').innerHTML=`${valor}`;
document.getElementById('bottom-right').innerHTML=`${simbolo}`;
};

function generarcarta (){

  const palos = ['spade','club','heart','diamond'];
  const simbolos ={
    'spade':'♠',
    'club':'♣',
    'heart':'♥',
    'diamond':'♦'
  };
const valores = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

const paloValue = Math.floor(Math.random()*4);
const chosenvalue = Math.floor(Math.random()*13);
const palo = palos[paloValue];
const simbolo = simbolos[palo];
const valor = valores[chosenvalue];

const divcarta = document.getElementById('carta');
divcarta.className = `card ${palo}`;
document.getElementById('top-left').innerHTML=`${simbolo}`;
document.getElementById('center').innerHTML=`${valor}`;
document.getElementById('bottom-right').innerHTML=`${simbolo}`;

}

document.getElementById('button-generator').addEventListener('click', generarcarta);




