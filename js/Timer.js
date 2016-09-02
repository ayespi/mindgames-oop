function Timer(){

}
Timer.prototype.start = function(){
  setInterval(setTime, 1000);
};
Timer.prototype.stop = function(){console.log("Timer Stopped...");};
Timer.prototype.reset = function(){console.log("Timer Has Been Reset...");};
    //
    //
    // var minutesLabel = document.getElementById("minutes");
    // var secondsLabel = document.getElementById("seconds");
    // var totalSeconds = 0;
    // setInterval(setTime, 1000);
    //
    // function setTime()
    // {
        // totalSeconds = timer_params[2];
        // ++totalSeconds;
        // secondsLabel = timer_params[1];
        // secondsLabel.innerHTML = pad(totalSeconds%60);
        // minutesLabel = timer_params[0];
        // minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
    // }
    //
    // function pad(val)
    // {
    //     var valString = val + "";
    //     if(valString.length < 2)
    //     {
    //         return "0" + valString;
    //     }
    //     else
    //     {
    //         return valString;
    //     }
    // }
