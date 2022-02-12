const $target = document.querySelector("#target");
const $xLine = document.querySelector("#x-line");
const $yLine = document.querySelector("#y-line");
const $pxs = document.querySelector("#pxs");
const $xPx = document.querySelector("#x-px");
const $yPx = document.querySelector("#y-px");

console.dir($xPx)

function onMouseMove(event){
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  $target.style.left = `${mouseX-60}px`;
  $target.style.top = `${mouseY-60}px`;
  $xLine.style.top = `${mouseY-9}px`;
  $yLine.style.left = `${mouseX-1}px`;
  $pxs.style.left = `${mouseX+20}px`
  $pxs.style.top = `${mouseY+20}px`
  $xPx.innerText = `${mouseX}px`
  $yPx.innerText = `${mouseY}px`
}
