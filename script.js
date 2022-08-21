let buttons = document.getElementById("buttons");
let input = document.getElementById("input");
let result = document.getElementById("result");
buttons.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    input.value = input.value + e.target.innerText; // adding to input
    result.value = eval(input.value);
  }
  e.stopPropagation();
});
