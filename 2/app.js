<<<<<<< HEAD
/*
function clickedSquareElement(element){
  console.log(element.getBoundingClientRect());
}

function clickedSquareEvent(event){
  console.log
(`client X: ${event.clientX}
client Y: ${event.clientY}
page X: ${event.pageX}
page Y: ${event.pageY}`)
}


/*
하나만 되면 되는건데 오해함 다해야되는줄...
하나만 하면 된다면 어떻게 할까?


*/
const one = document.querySelector("#one");


function clicked (event){
  const oneRect = one.getBoundingClientRect();
  console.log(oneRect);
  console.log
(`client X: ${event.clientX}
client Y: ${event.clientY}
page X: ${event.pageX}
page Y: ${event.pageY}`)
}

one.addEventListener("click", clicked);


const $scrollBy = document.querySelector("#scroll-by");
const $scrollTo = document.querySelector("#scroll-to");
const $scrollInto = document.querySelector("#scroll-into");



$scrollBy.addEventListener("click", () => {scrollBy(0, 100)} );
$scrollTo.addEventListener("click", () => {scroll(0, 100)});
$scrollInto.addEventListener("click", () => {one.scrollIntoView()});













=======
/*
function clickedSquareElement(element){
  console.log(element.getBoundingClientRect());
}

function clickedSquareEvent(event){
  console.log
(`client X: ${event.clientX}
client Y: ${event.clientY}
page X: ${event.pageX}
page Y: ${event.pageY}`)
}


/*
하나만 되면 되는건데 오해함 다해야되는줄...
하나만 하면 된다면 어떻게 할까?


*/
const one = document.querySelector("#one");


function clicked (event){
  const oneRect = one.getBoundingClientRect();
  console.log(oneRect);
  console.log
(`client X: ${event.clientX}
client Y: ${event.clientY}
page X: ${event.pageX}
page Y: ${event.pageY}`)
}

one.addEventListener("click", clicked);


const $scrollBy = document.querySelector("#scroll-by");
const $scrollTo = document.querySelector("#scroll-to");
const $scrollInto = document.querySelector("#scroll-into");



$scrollBy.addEventListener("click", () => {scrollBy(0, 100)} );
$scrollTo.addEventListener("click", () => {scroll(0, 100)});
$scrollInto.addEventListener("click", () => {one.scrollIntoView()});













>>>>>>> f41421824d1dd6747483c119f66108098be197d2
