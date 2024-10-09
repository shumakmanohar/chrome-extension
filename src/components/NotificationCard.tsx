import BellIcon from "./BellIcon";

type Props = {};

const NotificationCard = (_props: Props) => {
	return (
		<div>
			<section className="flex items-center justify-between px-2 bg-gray-200/40 py-2.5">
				<div className="flex items-center gap-4">
					<div className="p-2 rounded-full bg-gray-300/30 w-[35px] h-[35px] flex items-center justify-center">
						<BellIcon />
					</div>
					<div>
						<h1 className="text-md font-bold">Notification Header</h1>
						<p className="text-sm text-gray-400">Notification paragrah</p>
					</div>
				</div>

				<div>
					<div className="w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
				</div>
			</section>
		</div>
	);
};

export default NotificationCard;
