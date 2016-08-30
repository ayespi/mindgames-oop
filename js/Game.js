function Game(){
  this.start();
  this.buildBoard();
}

Game.prototype.start = function(){
  console.log("Game Started...");
};
Game.prototype.buildBoard = function(){
    shuffledImages = memoryCardShuffle(cardImages);
    outputBoard = "";
      for (i = 0; i < shuffledImages.length; i += 1){
        outputBoard += "<div class=\"card\" id=\"card_"+i+"\"><img src=\"images/"+shuffledImages[i]+"\"></div>";
        id = i + 1;
        card = new Card(id, shuffledImages[i]);
        gameTiles.push(card);
        console.log(shuffledImages[i]);
        console.log(gameTiles);
      }
    $('#page').html(outputBoard);
    console.log("Board Built...");
};
Game.prototype.play = function(){
  console.log("Play Begins...");
};
Game.prototype.end = function(){
  console.log("Game Over...");
};
Game.prototype.exit = function(){
  console.log("Exiting Application...");
};
