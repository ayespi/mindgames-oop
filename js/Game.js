function Game(){
  this.buildBoard();
  this.play();
}

Game.prototype.start = function(){
  console.log("Game Started...");
};
Game.prototype.buildBoard = function(){
    shuffledImages = memoryCardShuffle(cardImages);
    outputBoard = "";
    possibleMatches = (shuffledImages.length)/2;
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
      if(!timer){
        timer = new Timer();
        timer.start();
      }
      $(this).toggleClass("showImage");
      cardImage = $(this).find("img").attr("src");
      cardsFlipped.push(cardImage);
      if(cardsFlipped.length == 3){
       if(cardsFlipped[0] == cardsFlipped[1] && cardsFlipped.length){
           $(this).siblings(".showImage").addClass("match");
           console.log("Match Found!!!");
           if(matchesFound == 0){
             matchesFound = 2;
           }else{
             matchesFound += 1;
           }
           console.log(matchesFound);
           console.log(possibleMatches);
           if(matchesFound == possibleMatches){
             timer.stop();
           }
       }
       $(this).siblings(".showImage").removeClass("showImage");
       cardsFlipped = [cardsFlipped[2]];
   }
    console.log(cardsFlipped);
  });
};
Game.prototype.end = function(){
  console.log("Game Over...");
};
Game.prototype.exit = function(){
  console.log("Exiting Application...");
};
