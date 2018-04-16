

function showMousePos(event) {
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById('output-x').innerHTML = '<span> x:' + x + '</span>'
  document.getElementById('output-y').innerHTML = '<span> y:' + y + '</span>'
  drawBox(x,y)
}

function drawBox(x,y) {
  var c=document.getElementById("playArea");
  var ctx=c.getContext("2d");
  x = 400-x
  y = 400-y
  ctx.rect(x,y,3,3);
  ctx.stroke();
  ctx.fill();
}
