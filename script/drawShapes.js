function draw() {
  var canvas = document.getElementById('playArea');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    drawTriangle(ctx)
  }
}

function drawTriangle(ctx){
  // Filled triangle
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(105, 25);
  ctx.lineTo(25, 105);
  ctx.fillStyle="#FF0000";
  ctx.fill();
  ctx.closePath();

}

draw()
