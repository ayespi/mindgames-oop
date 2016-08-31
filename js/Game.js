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
        console.log(shuffledImages[i]);
      }
    $('#playing-area').html(outputBoard);
    $(".card img").css("display","none");
    console.log("Board Built...");
};
Game.prototype.play = function(){
  console.log("Play Begins...");
  $('div .card').on('click', function(){
    $(this).toggleClass("showImage");
    var cardImage = $(this).find("img").attr("src");
    console.log(cardImage);
  });
};
Game.prototype.flip = function(){
  console.log("Game Over...");
};
Game.prototype.end = function(){
  console.log("Game Over...");
};
Game.prototype.exit = function(){
  console.log("Exiting Application...");
};
