function Game(){
  this.start();
  this.buildBoard();
  this.play();
}

Game.prototype.start = function(){
  console.log("Game Started...");
};
Game.prototype.buildBoard = function(){
    shuffledImages = memoryCardShuffle(cardImages);
    outputBoard = "";
      for (i = 0; i < shuffledImages.length; i += 1){
        id = i + 1;
        outputBoard += "<div class=\"card\" id=\"card_"+id+"\"><img src=\"images/"+shuffledImages[i]+"\"></div>";
        card = new Card(id, shuffledImages[i]);
        gameTiles.push(card);
        $('.card img').css("visibility","hidden");
        console.log(shuffledImages[i]);
        console.log(gameTiles);
      }
    $('#playing-area').html(outputBoard);
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
