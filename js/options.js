let page = document.getElementById("container");

if (page)
{
	const data = [
		{
			color: "#87ceeb"
		},
		{
			color: "#38b0de"
		},
		{
			color: "#9ac0cd"
		},
		{
			color: "#00b2ee"
		}
	];

	for (let element of data)
	{
		let button = document.createElement("button");

		if (button)
		{
			button.style.backgroundColor = element.color;
			button.innerHTML = element.color.substr(1);
			button.addEventListener("click", () =>
			{
				chrome.storage.sync.set(element, () => {
					console.log("Color: %s", element.color);
				});
			});
			page.appendChild(button);
		}
	}
}