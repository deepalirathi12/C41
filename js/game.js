  class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      car1 = createSprite(100,200)
      car1.addImage("car", car1img)
      car2 = createSprite(300,200)
      car2.addImage("car", car2img)
      car3 = createSprite(500,200)
      car3.addImage("car", car3img)
      car4 = createSprite(700,200)
      car4.addImage("car", car4img)
      cars = [car1,car2,car3,car4]
    }
  
    play(){
      form.hide();
     // textSize(30)
      //text("Game Started", 100,150)
      Player.getPlayerInfo();

      
//var ypos = 170
var x = 175;
var y;
var index = 0
background(rgb(198,135,103));
  

  image (track, 0, -displayHeight*4, displayWidth, displayHeight*5)
for(var plr in allPlayers){
  

  index = index +1;
 // x = x +200
// x = allPlayers[plr].xPos
 x = 200 + (index*200) + allPlayers[plr].xPos
  y = displayHeight - allPlayers[plr].distance;
  
  cars[index-1].x = x;
  cars[index-1].y = y;

  if(index === player.index ){
    
    cars[index - 1].shapeColor = "red";
    camera.position.x = displayWidth/2;
    camera.position.y = cars[index-1].y
  }
  
  //ypos = ypos + 20
  //textSize(15)
  //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 170, ypos)

}

   
/*if(player.distance < 2150){
  if(keyIsDown(38) && player.index !== null){
      yv = yv +0.9;
      if(keyIsDown(37)){
          xv =xv - 0.2;
      }
      if(keyIsDown(39)){
          xv = xv +0.2;
      }
  }else if(keyIsDown(38) && yv > 0 && player.index !== null){
      yv = yv -0.1;
      xv = xv *0.9;
  }else{
      yv = yv * 0.985;
      xv = xv *0.985;
  }
}*/
     
   if(keyIsDown(UP_ARROW) && player.index !== null){
     yv = yv +0.9
     if(keyIsDown(LEFT_ARROW)){
       xv = xv -0.2
     }
     if(keyIsDown(RIGHT_ARROW)){
      xv = xv +0.2
    }
  //  player.distance = player.distance + 50;
   // player.update()
  }

 /* if(player.distance > 3680){
    gameState = 2
  }*/

  player.xPos = player.xPos + xv
  xv = xv *0.985
  player.distance = player.distance +yv
  yv =yv * 0.985
  player.update()
  drawSprites(); 
    }
  
    end(){
  //    console.log("Game Ended")
    var img = createImg("images/gameOver.png")
    img.position(displayWidth/2, displayHeight/2-200)
      
    }
  }

  