const themeSelector = document.querySelector("select");

function initializeTheme() {
    if (document.body.classList.contains("dark")) {
        themeSelector.value = "dark"; // Set the selector to dark on initial load
    } else {
        themeSelector.value = "light"; // Set the selector to light on initial load
    }
}

function changeTheme() {

    if (themeSelector.value === "dark")
         {
            document.body.classList.add("dark");
            document.querySelector(".logo").src = "byui-logo_white.png";
         }
    else
    {
        document.body.classList.remove("dark");
        document.querySelector(".logo").src = "byui_logo_blue.webp";
    }
}

initializeTheme();

themeSelector.addEventListener("change", changeTheme);