function Timer(){

}
Timer.prototype.start = function(){
  timerStart = setInterval(setTime, 1000);
};
Timer.prototype.stop = function(){
  clearInterval(timerStart);
  console.log("Timer Stopped...");
};
Timer.prototype.reset = function(){
  console.log("Timer Has Been Reset...");
};
