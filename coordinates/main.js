const $target = document.querySelector("#target");
const $xLine = document.querySelector("#x-line");
const $yLine = document.querySelector("#y-line");
const $pxs = document.querySelector("#pxs");

document.addEventListener("mousemove", event =>{
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  $target.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px) translate(-50%,-50%)`;
  $xLine.style.transform = `translateY(${mouseY-9}px)`;
  $yLine.style.transform = `translateX(${mouseX-1}px)`;
  $pxs.style.transform = `translate(${mouseX+30}px, ${mouseY+30}px`
  $pxs.textContent = `${mouseX}px ${mouseY}px`
})
