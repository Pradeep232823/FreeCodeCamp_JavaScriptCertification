const themes = [
  { name: "black", message: "Black Theme is Switched ON!" },
  { name: "gray", message: "Gray Theme is Switched ON!" },
  { name: "orange", message: "Orange Theme is Switched ON!" }
];

const themeItems = document.querySelectorAll('[role="menuitem"]');
const liveRegion = document.querySelector('[aria-live="polite"]');
const switcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");

switcherButton.addEventListener("click", () => {
  const isExpanded = switcherButton.getAttribute("aria-expanded") === "true";

  themeDropdown.hidden = isExpanded;
  switcherButton.setAttribute("aria-expanded", String(!isExpanded));
});

themeItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedTheme = item.textContent.toLowerCase();

    themes.forEach(theme => {
      document.body.classList.remove(`theme-${theme.name}`);
    });

    document.body.classList.add(`theme-${selectedTheme}`);

    const themeData = themes.find(t => t.name === selectedTheme);
    if (themeData) {
      liveRegion.textContent = themeData.message;
    }

    themeDropdown.hidden = true;
    switcherButton.setAttribute("aria-expanded", "false");
  });
});
