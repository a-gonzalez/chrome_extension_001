let button = document.getElementById("btnOne");

if (button)
{
	console.log("button: %o", button);
	
	chrome.storage.sync.get("color", (data) => 
	{
		console.log("data: %o", data);

		button.style.backgroundColor = data.color;
		//button.setAttribute("value", data.color);
	});

	button.onclick = (element) =>
	{
		let tab = {
			active: true,
			currentWindow: true
		};

		chrome.tabs.query(tab, (tabs) =>
		{
			console.log("Tabs: %o", tabs);

			let code = {
				code: "document.body.style.backgroundColor = '" + button.style.backgroundColor + "';"
			};

			chrome.tabs.executeScript(tabs[0].id, code);
		});
	};
}
