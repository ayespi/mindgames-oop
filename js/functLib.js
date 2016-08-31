//Shuffle ARRAY Elements
    function memoryCardShuffle(array) {
      var currentIndex = array.length;
      var temporaryValue;
      var randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      	return array;
    }

    function shuffleCardImages(array){
      shuffledImages = memoryCardShuffle(array);
      return shuffledImages;

    }

    // function flipCard(){
    //     $(this).toggleClass("showImage");
    //     var cardImage = $(this).find("img").attr("src");
    //     cardsFlipped.push(cardImage);
    //     if(cardsFlipped.length == 3){
    //       if(cardsFlipped[0] == cardsFlipped[1] && cardsFlipped.length){
    //           $(this).siblings(".showImage").addClass("match");
    //       }
    //       $(this).siblings(".showImage").removeClass("showImage");
    //       cardsFlipped = [cardsFlipped[2]];
    //     }
    // }
