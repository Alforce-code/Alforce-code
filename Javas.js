// Toggle the menu list visibility when the menu button is clicked
document.getElementById("menuButton").addEventListener("click", function () {
    const menu = document.getElementById("menuList");
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide the menu
    } else {
        menu.style.display = "block"; // Show the menu
    }
});
