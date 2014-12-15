
function canvas() {
  var context = myCanvas.getContext('2d');
  var x = 0, y=0, width = myCanvas.width, height = myCanvas.height;
  var interval;
  var myForm, xMultiField, yMultiField, numBoxes, boxWidth, boxHeight, userData;

  myForm = document.querySelector('form');
  xMultiField = myForm.elements.x_multi;
  yMultiField = myForm.elements.y_multi;
  numBoxes = myForm.elements.num_boxes;
  boxWidth = myForm.elements.box_width;
  boxHeight = myForm.elements.box_height;

  function getContents (ev) {
    ev.preventDefault();

      userData = {
       xField: parseFloat(xMultiField.value),
       yField: parseFloat(yMultiField.value),
       countBoxes: parseFloat(numBoxes.value),
       boxW: parseFloat(boxWidth.value),
       boxH: parseFloat(boxHeight.value)
    }
    drawManyRectangles()

  }




  function stop() {
    clearInterval(interval);
  }
  function drawRectangle() {
    context.fillStyle = '#bc141a';
    context.fillRect(0,0,100,140);

  }

  function drawManyRectangles() {
    //var i = 10;
    var n = userData.countBoxes;
    width = userData.boxW;
    height = userData.boxH;
    var time = 0;
    var redraw = function (){
      context.clearRect(0,0, myCanvas.width, myCanvas.height);
      for (i=0; i < n ;i++) {5
        x = myCanvas.width / 2 + Math.sin(time *i) * userData.xField;
        y = i/n * myCanvas.height - Math.cos(time*n) * userData.yField;
        context.fillRect(x,y, width, height);
        i++;
      }
      time +=.01;
    }
    var interval = setInterval( redraw , 20 );
  }


  myForm.onsubmit=  getContents;

}




canvas();
