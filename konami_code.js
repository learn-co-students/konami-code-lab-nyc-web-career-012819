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

let index = 0;

function init() {
  let body = document.querySelector('body');
  body.addEventListener('keydown', function(e){
    const key = e.key
    console.log(key);

    if (key === codes[index]){
        index++;

      if (index === codes.length){
        alert("Easter Egg!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
