
function canvas() {
  var context = myCanvas.getContext('2d');
  var x = 0, y=0, width = myCanvas.width, height = myCanvas.height;
  var interval;

  function stop() {
    clearInterval(interval);
  }
    function drawRectangle() {
    context.fillStyle = '#bc141a';
    context.fillRect(0,0,100,140);

    }

    function drawManyRectangles() {
      //var i = 10;
      var n = 20;
      width = 20;
      height = 5;
      var time = 0;
      var redraw = function (){
        context.clearRect(0,0, myCanvas.width, myCanvas.height);
      for (i=0; i < n ;i++) {
        x = myCanvas.width / 2 + Math.sin(time *i) *05;
        y = i/n * myCanvas.height + Math.cos(time *i) *05;
        context.fillRect(x,y, width, height);
        i++;
        }
      time +=.01;
    }
    var interval = setInterval( redraw , 20 );
    }
    drawManyRectangles()

}

canvas();
