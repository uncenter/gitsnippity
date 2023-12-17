const systemTheme = () =>
	window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

function setTheme(theme, permanent = false) {
	document.documentElement.setAttribute("theme", theme);
	if (permanent) localStorage.setItem("theme", theme);
}

window.addEventListener("DOMContentLoaded", () => {
	setTheme(localStorage.getItem("theme") || systemTheme());

	document.querySelector("#lightswitch").addEventListener("click", () => {
		setTheme(
			document.documentElement.getAttribute("theme") === "light"
				? "dark"
				: "light",
			true
		);
	});

	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (event) => {
			if (!localStorage.getItem("theme")) {
				setTheme(event.matches ? "dark" : "light");
			}
		});
});
s;
