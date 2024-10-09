import BellIcon from "./BellIcon";

const NotFound = () => {
	return (
		<div className="flex items-center justify-center min-h-[200px] flex-col gap-6">
			<div className="h-14 w-14 rounded-full items-center justify-center flex bg-green-500/60 p-2">
				<BellIcon />
			</div>
			<p className="text-xl font-bold">No Notifications </p>
		</div>
	);
};

export default NotFound;
