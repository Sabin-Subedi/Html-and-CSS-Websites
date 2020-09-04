document.getElementById("day-night-checkbox").addEventListener("click", () => {
    var element = document.body;
    element.classList.toggle("light-mode");

    var x = document.getElementById("head");
    if (x.innerHTML === "Dark Mode") {
        x.innerHTML = "Light Mode"
    } else {
        x.innerHTML = "Dark Mode"
    }
})