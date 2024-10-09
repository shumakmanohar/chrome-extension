const Skeleton = () => {
	return (
		<div className="animate-pulse flex items-center gap-8 px-4">
			<div className="rounded-full bg-slate-300 h-10 w-10"></div>
			<div className="flex gap-2 flex-col">
				<div className="h-2 bg-slate-300 rounded-lg w-[300px]"></div>
				<div className="h-2 bg-slate-300 rounded-lg  w-[100px]"></div>
			</div>
		</div>
	);
};

export default Skeleton;
