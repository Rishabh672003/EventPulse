import React from "react";
import EventTimer from "./EventTimer";

const EventList = ({ events, deleteEvent }) => {
	return (
		<div className="flex flex-wrap justify-center space-x-4">
			{events.map((event, index) => (
				<div key={index} className="p-4 border rounded shadow-md">
					<EventTimer event={event} />
					<button
						onClick={() => deleteEvent(index)}
						className="mt-4 p-2 bg-red-500 text-white rounded"
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default EventList;
