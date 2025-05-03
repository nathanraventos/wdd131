const themeSelector = document.querySelector("select");

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
themeSelector.addEventListener("change", changeTheme);