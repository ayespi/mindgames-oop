function Card(id, front){
  this.id = id;
  this.front = front;
}
Card.prototype.flip = function(){
  // console.log("Card has been flipped!!!");
  // $(this).toggleClass("showImage");
  // var cardImage = $(this).find("img").attr("src");
  // console.log(cardImage);
};

// function flipCard(){
//     $(this).toggleClass("showImage");
//     var cardImage = $(this).find("img").attr("src");
//     console.log(cardImage);
//     // cardsFlipped.push(cardImage);
//     // if(cardsFlipped.length == 3){
//     //   if(cardsFlipped[0] == cardsFlipped[1] && cardsFlipped.length){
//     //       $(this).siblings(".showImage").addClass("match");
//     //   }
//     //   $(this).siblings(".showImage").removeClass("showImage");
//     //   cardsFlipped = [cardsFlipped[2]];
//     // }
// }
