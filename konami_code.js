const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {

// let key = [];
// let count = 0;
let counter = 0;

document.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e) {
    console.log('hi');
    window.alert("I am an alert box!");
    if (e.key == codes[counter]){
      counter++;
    }
    else {
      counter = 0;
    }

    if( counter === 10){
      window.alert("Hurray!");
      console.log("HEY!");
    }
  }
}
