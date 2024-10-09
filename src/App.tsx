import { useEffect, useState } from "react";
import { AppNotification } from "./types";
import NotificationCard from "./components/NotificationCard";
import Skeleton from "./components/Skeleton";
import ErrorHandler from "./components/Error";
import NotFound from "./components/NotFound";
import { updateBadge } from "./util/extension";

export const API_URL =
	"https://670624e9031fd46a83121bb9.mockapi.io/api/notifications/message";

function App() {
	const [data, setData] = useState<AppNotification[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [readMessages, setReadMessages] = useState<string[]>([]);

	useEffect(() => {
		//Fetch latest notification from API
		const fetchNotifications = async () => {
			try {
				setLoading(true); //set loading to true
				setError(null); // clear previous error

				const response = await fetch(API_URL);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				setData(data);

				//Fetch Already Read Messages
				chrome.storage.local.get("readMessages", (result) => {
					setReadMessages(result.readMessages || []);
				});

				//Set Badge
				updateBadge();
			} catch (err: any) {
				console.error("Error fetching notification:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchNotifications();
	}, []);

	const renderData = () => {
		if (loading) {
			return (
				<div className="flex flex-col gap-4">
					<Skeleton />
					<Skeleton />
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			);
		}

		if (error) {
			return <ErrorHandler msg={error} />;
		}

		if (!data.length) return <NotFound />;

		if (data) {
			return (
				<div className="flex flex-col ">
					<div className="flex flex-col ">
						{data.map((notification) => (
							<NotificationCard
								key={notification.id}
								{...notification}
								readMessages={readMessages}
								setReadMessages={setReadMessages}
							/>
						))}
					</div>
				</div>
			);
		}
	};
	return (
		<div className="w-[500px]  shadow-md max-h-[400px] overflow-y-auto py-3 ">
			<h1 className="text-xl font-bold mb-6 px-2">My Notifications</h1>
			{renderData()}
		</div>
	);
}

export default App;

//Update Chrome Extension Badge
// const updateBadge = (notifications: AppNotification[]) => {
// 	const unreadNotifications = notifications.filter(
// 		(notification) => !notification.read
// 	);

// 	chrome.action.setBadgeText({
// 		text:
// 			unreadNotifications.length > 0
// 				? unreadNotifications.length.toString()
// 				: "",
// 	});
// };
// const fetchCacheNotifications = () => {
// 	setLoading(true);
// 	//check if notification already available in chrome local storage
// 	chrome.storage.local.get(["notifications", "readMessages"], (result) => {
// 		const localNotifications = result.notifications || [];
// 		const storedReadMessages = result.readMessages || {};

// 		if (localNotifications.length > 0) {
// 			console.log("why i am here", localNotifications);
// 			//already fetched Notifications exists , we use them
// 			setData(localNotifications);
// 			setReadMessages(storedReadMessages);
// 			setLoading(false);
// 		} else {
// 			console.log("I should be fetched");
// 			//No Data Avaialable [Cache].Fetch New Notification
// 			fetchNotifications();
// 		}
// 	});
// };
