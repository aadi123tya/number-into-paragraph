const input = document.querySelector("input");
const p = document.querySelector("#paragraph");
const button = document.querySelector("button");
const api_button = document.querySelector("#API");
const arr = [
  "aqwewe",
  "asqwed",
  "wewer",
  "qwert",
  " ",
  ".",
  "qwe",
  "qweee",
  "werwe",
  "werweq",
  "qwrdf",
];
let result = "";
let result_2=""
let is = false;

button.addEventListener(
  "click",
  function () {
    const paragraph = document.createElement("p");
    loop();
  },
  false
);
function display(y) {
  result += y;
}

function loop() {
  for (let i = 0; i < input.value; i++) {
    //   //    let ch = arr[Math.ceil(Math.random()*arr.length-1)];

    fetch("https://random-word-api.herokuapp.com/word")
      .then(function (response) {
        return response.json();
      })
      .then(function (word) {
        result += word[0] + " ";
        p.innerHTML = result;
        //  console.log(result);
      });
  }
  console.log(result);
}

api_button.addEventListener(
  "click",
  function () {
    const paragraph = document.createElement("p");
    second_loop();
  },
  false
);
function display(y) {
  result += y;
}

function second_loop() {
  for (let i = 0; i < input.value; i++) {
    let ch = arr[Math.ceil(Math.random() * arr.length - 1)];
    result_2 += ch + " ";
  }
  p.innerHTML = result_2;
  console.log(result);
}
