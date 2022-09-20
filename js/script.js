let input = document.querySelector(".inputPlace input");

function CheckValidation() {
  if (input.value.length > 8) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    error.style.color = "#32ff7e";
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    error.style.color = "#ff4d4d";
  }
}

input.addEventListener("keyup", CheckValidation);
