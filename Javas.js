document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const menuList = document.getElementById("menu-list");

    // Initially hide the menu
    menuList.style.display = "none";

    // Toggle menu visibility when the button is clicked
    menuButton.addEventListener("click", function() {
        if (menuList.style.display === "none") {
            menuList.style.display = "flex";
        } else {
            menuList.style.display = "none";
        }
    });
});
