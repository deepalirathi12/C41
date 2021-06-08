  class Form {
    constructor() {
      this.input = createInput("Name:");
      this.button = createButton("Play");
      this.greeting = createElement('h3');
      this.title = createElement('h2')
      this.reset = createButton("Reset")
    }

    hide(){
      this.input.hide()
      this.greeting.hide()
      this.button.hide()
      this.title.hide();
    }
  
  
    display(){
      
      this.title.html("Multipalyer Car Racing Game");
      this.title.position(displayWidth/2-250, displayHeight/2-350);

      

      this.input.position(displayWidth/2 - 200, displayHeight/2 - 250);
      this.button.position(displayWidth/2 - 150 , displayHeight/2 -200);
      this.reset.position(displayWidth/2 + 350 , 20);

      this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
  
        player.name = this.input.value();
        
        playerCount =playerCount +1 ;
        player.index = playerCount
        player.update(name)
        player.updateCount(playerCount);
        
        this.greeting.html("Hello " + player.name )
        this.greeting.position(displayWidth/2 +200, displayHeight/2 - 100)
      });


      this.reset.mousePressed(()=>{
        game.update(0);
        player.updateCount(0)
      });
  
    }
  }
  
  