import NotificationCard from "./components/NotificationCard";

function App() {
	return (
		<div className="w-[500px]  shadow-md max-h-[400px] overflow-y-auto py-3 ">
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
