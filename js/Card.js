function Card(id, front){
  this.id = id;
  this.front = front;
}
Card.prototype.flip = function(){
  console.log("Card has been flipped!!!")
};
