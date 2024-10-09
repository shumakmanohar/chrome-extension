chrome.alarms.create("checkMessages", { periodInMinutes: 0.3 });

const API_URL =
	"https://670624e9031fd46a83121bb9.mockapi.io/api/notifications/message";

chrome.alarms.onAlarm.addListener(async () => {
	try {
		const response = await fetch(API_URL);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await response.json();

		chrome.storage.local.get("readMessages", (result) => {
			const readMsgs = result.readMessages;
			const totalUnreadNotifications = data.length - readMsgs.length;

			chrome.action.setBadgeText({
				text: totalUnreadNotifications.toString(),
			});
		});
	} catch (err) {
		console.error("Error in Service Worker", err);
	}
});
