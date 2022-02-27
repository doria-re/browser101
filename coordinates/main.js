<<<<<<< HEAD
const $target = document.querySelector("#target");
const $xLine = document.querySelector("#x-line");
const $yLine = document.querySelector("#y-line");
const $pxs = document.querySelector("#pxs");
const $xPx = document.querySelector("#x-px");
const $yPx = document.querySelector("#y-px");

console.dir($xPx)

function onMouseMove(event){
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  $target.style.left = `${mouseX}px`;
  $target.style.top = `${mouseY}px`;
  $xLine.style.top = `${mouseY-9}px`;
  $yLine.style.left = `${mouseX-1}px`;
  $pxs.style.left = `${mouseX+20}px`
  $pxs.style.top = `${mouseY+20}px`
  $xPx.innerText = `${mouseX}px`
  $yPx.innerText = `${mouseY}px`
}

/* document.addEventListener("mousemove", event => {

})
이렇게 구현하면 div로 전체 감쌀 필요 없이 구현 가능 
*/
=======
const $target = document.querySelector("#target");
const $xLine = document.querySelector("#x-line");
const $yLine = document.querySelector("#y-line");
const $pxs = document.querySelector("#pxs");
const $xPx = document.querySelector("#x-px");
const $yPx = document.querySelector("#y-px");

console.dir($xPx)

function onMouseMove(event){
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  $target.style.left = `${mouseX}px`;
  $target.style.top = `${mouseY}px`;
  $xLine.style.top = `${mouseY-9}px`;
  $yLine.style.left = `${mouseX-1}px`;
  $pxs.style.left = `${mouseX+20}px`
  $pxs.style.top = `${mouseY+20}px`
  $xPx.innerText = `${mouseX}px`
  $yPx.innerText = `${mouseY}px`
}

/* document.addEventListener("mousemove", event => {

})
이렇게 구현하면 div로 전체 감쌀 필요 없이 구현 가능 
*/
>>>>>>> f41421824d1dd6747483c119f66108098be197d2
