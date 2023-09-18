let btn_show = document.getElementById("show");
let btn_hide = document.getElementById("hide");
let input_pass = document.getElementById("pass");
btn_show.addEventListener("click", () => {
  input_pass.type = "text";
  btn_show.style.display = "none";
  btn_hide.style.display = "block";
});
btn_hide.addEventListener("click", () => {
  input_pass.type = "password";
  btn_hide.style.display = "none";
  btn_show.style.display = "block";
});
