import { useEffect, useState } from "react";
import { AppNotification } from "../types";
import BellIcon from "./BellIcon";

type Props = AppNotification & {
	readMessages: string[];
	setReadMessages: React.Dispatch<React.SetStateAction<string[]>>;
};

const NotificationCard = ({
	id,
	content,
	heading,
	highPriority,
	readMessages,
	setReadMessages,
}: Props) => {
	const [isMsgRead, setIsMsgRead] = useState(false);

	useEffect(() => {
		setIsMsgRead(readMessages.includes(id));
	}, [readMessages]);

	const toggleReadStatus = () => {
		setIsMsgRead((prevState) => !prevState); //toggle State

		let updatedReadMessages = [...readMessages];

		if (readMessages.includes(id)) {
			// If the message is already marked as read, remove it (toggle to unread)
			updatedReadMessages = updatedReadMessages.filter((msgId) => msgId !== id);
		} else {
			// If the message is unread, mark it as read (add it to the array)
			updatedReadMessages.push(id);
		}

		// Update chrome.storage.local with the new read status
		chrome.storage.local.set({ readMessages: updatedReadMessages });

		//Update the State
		setReadMessages(updatedReadMessages);
	};
	return (
		<section
			onClick={() => {
				toggleReadStatus();
			}}
			className="flex items-center justify-between px-2 bg-gray-200/40 py-2.5 hover:cursor-pointer hover:bg-gray-200/50 transition-all duration-200"
		>
			<div className="flex items-center gap-4">
				<div className="p-2 rounded-full bg-gray-300/30 w-[35px] h-[35px] flex items-center justify-center">
					<BellIcon />
				</div>
				<div>
					<h1 className="text-md font-bold">
						{heading}
						{highPriority && (
							<span className="text-xs font-medium text-red-500 border border-red-500 px-2 py-1 rounded-full ml-2">
								High Priority
							</span>
						)}
					</h1>
					<p className="text-sm text-gray-400">{content}</p>
				</div>
			</div>

			<div>
				{isMsgRead ? (
					<p className="font-bold text-green-400">Read</p>
				) : (
					<div className="w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
				)}
			</div>
		</section>
	);
};

export default NotificationCard;
