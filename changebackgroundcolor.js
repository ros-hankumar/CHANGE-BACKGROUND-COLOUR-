const color = document.getElementById("selectcolor");
color.addEventListener("change",function () {
    document.body.style.backgroundColor = color.value;
});