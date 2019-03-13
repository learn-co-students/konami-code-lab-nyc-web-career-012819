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
  // your code here
  let i = 0;
  document.body.addEventListener('keydown', (ev) => {
    console.log(ev.key);
    if (ev.key === codes[i]) {
      i++;
      console.log(i);

      if (i === codes.length) {
        alert("nice");
        console.log('nice')
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}
