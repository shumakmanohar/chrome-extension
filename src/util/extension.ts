import { API_URL } from "../App";

//Update Chrome Extension Badge
export const updateBadge = async () => {
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
	} catch (error) {
		console.log(error);
	}
};
