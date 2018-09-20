(function()
{
	console.log("Running...");

	chrome.runtime.onInstalled.addListener(() =>
	{
		let color = {
			id: 1,
			color: '#ff6347' //'#3aa757'
		};
	
		let url = {
			pageUrl: {
				"hostEquals": "developer.chrome.com"
			}
		};
	
		let condition = [
			{
				conditions: [new chrome.declarativeContent.PageStateMatcher(url)],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}
		];

		chrome.storage.sync.set(color, () =>
		{
			console.log("Set: %o", color);
		});

		chrome.declarativeContent.onPageChanged.removeRules(undefined, () =>
		{
			chrome.declarativeContent.onPageChanged.addRules(condition);
		});
	});

}())