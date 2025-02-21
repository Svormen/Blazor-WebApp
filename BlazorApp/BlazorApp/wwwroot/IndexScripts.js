function toggleLinks() {
    var x = document.getElementById("aboutMeLinks");
    var button = document.getElementById("showLinksButton");

    if (x.style.display === "block") {
        x.style.display = "none";
        button.textContent = "Show Links";
    } else {
        x.style.display = "block";
        button.textContent = "Hide Links";
    }
}
