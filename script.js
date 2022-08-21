let buttons = document.getElementById("buttons");
let input = document.getElementById("input");
let result = document.getElementById("result");
let deleteBtn = document.getElementById("delete-button");
let clearBtn = document.getElementById("clear-button");
buttons.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    input.value = input.value + e.target.innerText; // adding to input
    try {
      result.value =
        eval(input.value) > Math.floor(eval(input.value))
          ? eval(input.value).toFixed(3)
          : eval(input.value);
      result.style.color = null;
    } catch (e) {
      result.value = e.name;
      result.style.color = e && "red";
    }
  }
  e.stopPropagation();
});
clearBtn.addEventListener("click", (e) => {
  input.value = "";
  result.value = 0;
  e.stopPropagation();
});
deleteBtn.addEventListener("click", (e) => {
  const string = input.value.toString();
  input.value = string.slice(0, -1);
  e.stopPropagation();
});
