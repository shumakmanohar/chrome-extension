import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NotificationCard from "./components/NotificationCard";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="w-full max-w-lg shadow-md max-h-[400px] overflow-y-auto py-3">
			<h1 className="text-xl font-bold mb-6 px-2">My Notifications</h1>
			<div className="flex flex-col ">
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
			</div>
		</div>
	);
}

export default App;
