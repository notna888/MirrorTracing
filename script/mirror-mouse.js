
canvasSize = 600;

//mouseDown = false;
mouseDown = true;

function toggleDraw(){
  if(mouseDown){
    //mouseDown = false;
    mouseDown = true;
  } else{
    mouseDown = true;
  }
}

function showMousePos(event) {
  //console.log(mouseDown)
  if (mouseDown) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById('output-x').innerHTML = '<span> x:' + x + '</span>'
    document.getElementById('output-y').innerHTML = '<span> y:' + y + '</span>'
    drawBox(x,y)
  }
}

function drawBox(x,y) {
  var c=document.getElementById("playArea");
  var ctx=c.getContext("2d");
  x = canvasSize-x
  y = canvasSize-y
  ctx.rect(x,y,3,3);
  ctx.fillStyle="#000000";
  ctx.stroke();
  ctx.fill();
}

//need to lock the mouse pointer within the canvas
// https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API

document.getElementById('container').innerHTML = '<canvas id="playArea" width="' + canvasSize + 'px" height="' + canvasSize + 'px" onclick="toggleDraw()" onmousemove="showMousePos(event)"> </canvas>'
