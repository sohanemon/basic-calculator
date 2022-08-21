let buttons = document.getElementById("buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") console.log(e.target.innerText);
  e.stopPropagation();
});
