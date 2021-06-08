var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var car1, car2, car3,car4,cars
var track, car1img, car2img, car3img,car4img
var distance =0
var go
var xv = 0
var yv = 0;

function preload(){
  track = loadImage("images/track.jpg")
  car1img = loadImage("images/car1.png")
  car2img = loadImage("images/car2.png")
  car3img = loadImage("images/car3.png")
  car4img = loadImage("images/car4.png")
  go = loadImage("images/gameover.png")
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end()
  }
}
