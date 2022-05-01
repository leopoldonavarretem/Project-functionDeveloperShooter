//VARIABLES NECESARIAS
let tauntBox = document.getElementById("enemy_dialogue");
let characterDeath = 0;

//VARIABLES PARA CREACION DE TEXT BOX
let articleCreation = document.createElement("article");
let imgCreation = document.createElement("img");
let pCreation = document.createElement("p");

//HTML Atributos
articleCreation.setAttribute("id", "enemy_taunt");
pCreation.setAttribute("id", "taunt");
imgCreation.setAttribute("id", "enemy_image");

//VARIABLES PARA RANDOMIZAR
let randomEnemy;
let randomTaunt;

// JAVASCRIPT ENEMY TAUNTS
let jsTaunts = [
  '"class Perdedor {constructor( ){this.jugador};"',
  '"function ( ){Cazar jugador};"',
  '"console.log("Te matare");"',
  '"jugadoresMuertos++;"',
  '"game.removeChild("jugador");"',
  '"let jugador = "muerto";"',
  '"if (jugador = "vivo"){matar.player( )};"',
  '"ReferenceError: jugador is not defined"',
  '"player.vidas.forEach(vidas--);"',
  '"jugadoresMuertos++"',
];

let jsImage = "/Assets/Images/Enemy-Javascript.png";

//CSS Enemy TAUNTS
let cssTaunts = [
  '"Ni yo podria hacerte ver bien"',
  '"Te hace falta un cambio de Font Style"',
  '""Ironhacker? Te veo mas como un BronzeLoser""',
  '"Mi codigo no se quiebra, pero yo a ti si!"',
  '"Estas perdido"',
  '"Regresa a aprender HTML!"',
  '"Ya no puedes mas perdedor?"',
  '"Ve a llorarle a Yani!"',
  '"Ven y dame un abrazo!"',
  '"Ahi te va el game over!"',
];

let cssImage = "/Assets/Images/Enemy-Css.png";

//HTML Enemy TAUNTS
let htmlTaunts = [
  '"Podras derrotarme, pero nunca a mis hermanos"',
  '"Enfrentame y te de dejo <‎/head>"',
  '"Ni emmet podra completarte cuando mueras"',
  '"Nunca te graduaras"',
  '"Te voy a destruir!"',
  '""Aun si consigues derrotarnos, siempre seras un junior dev""',
  '"Tomara mas tiempo codearme, que matarte; ironico porque no soy un lenguaje"',
  '"Dejare tu <‎body> completamente destruido"',
  '"Ni tus  profesores saben como debuggear tu punteria"',
  '"Si haces alt + f4; te dan un superpoder"',
];

let htmlImage = "/Assets/Images/Enemy-Html.png";

//CREACION DE HTML
function createTauntBox(image, taunt) {
  //HTML CREATION
  tauntBox.appendChild(articleCreation);
  articleCreation.appendChild(imgCreation);
  articleCreation.appendChild(pCreation);

  //Cambio de Imagen
  imgCreation.setAttribute("src", image);

  //Cambio de taunt
  pCreation.innerHTML = taunt;

  setTimeout(() => {
    tauntBox.removeChild(articleCreation);
  }, 2500);
}

// Reproduce taunts si estas vivo

let enemyTauntCreator = setInterval((hello) => {
  randomEnemy = Math.floor(Math.random() * 10);
  randomTaunt = Math.floor(Math.random() * 10);

  if (randomEnemy <= 2) {
    createTauntBox(jsImage, jsTaunts[randomTaunt]);
  } else if (randomEnemy > 2 && randomEnemy <= 6) {
    createTauntBox(cssImage, cssTaunts[randomTaunt]);
  } else if (randomEnemy > 6) {
    createTauntBox(htmlImage, htmlTaunts[randomTaunt]);
  }
}, 6000);

//Para el taunt si mueres
function stopTaunt() {
  clearInterval(enemyTauntCreator);
}

setInterval(() => {
  if (characterDeath === 1) {
    stopTaunt();
  }
});
