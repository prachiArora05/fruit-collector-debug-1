var database, bgImg, form, game;
var player, player1, player2, players, allPlayers, playerImg;
var fruits, fruitGroup, fruit1Img, fruit2Img, fruit3Img, fruit4Img, fruit5Img;
var player1score = 0;
var player2score = 0;
var gameState = 0;
var playerCount = 0;
var score = 0;

function preload(){
  bgImg = loadImage("images/jungle.jpg");
  playerImg = loadImage("images/basket2.png");
  fruit1Img = loadImage("images/apple2.png");
  fruit2Img = loadImage("images/banana2.png");
  fruit3Img = loadImage("images/melon2.png");
  fruit4Img = loadImage("images/orange2.png");
  fruit5Img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(bgImg);
  
  if (playerCount === 2) {
    game.update(1);
  }
  
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}