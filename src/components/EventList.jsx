import React, { useState } from "react";
import EventTimer from "./EventTimer";

const EventList = ({ events, updateEvent, deleteEvent }) => {
	const [editingIndex, setEditingIndex] = useState(null);

	return (
		<div className="flex flex-wrap justify-center space-x-4 mb-8">
			{events.map((event, index) => (
				<div
					key={index}
					className="p-4 border rounded shadow-md w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
				>
					{editingIndex === index ? (
						<EditEventForm
							event={event}
							index={index}
							updateEvent={updateEvent}
							setEditingIndex={setEditingIndex}
						/>
					) : (
						<>
							<EventTimer event={event} />
							<div className="mt-4 flex justify-center space-x-2">
								<button
									onClick={() => setEditingIndex(index)}
									className="p-2 bg-yellow-500 dark:bg-yellow-600 text-white rounded"
								>
									Edit
								</button>
								<button
									onClick={() => deleteEvent(index)}
									className="p-2 bg-red-500 dark:bg-red-600 text-white rounded"
								>
									Delete
								</button>
							</div>
						</>
					)}
				</div>
			))}
		</div>
	);
};

const EditEventForm = ({ event, index, updateEvent, setEditingIndex }) => {
	const [name, setName] = useState(event.name);
	const [date, setDate] = useState(event.date);

	const handleSubmit = (e) => {
		e.preventDefault();
		updateEvent(index, { name, date });
		setEditingIndex(null);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Event Name"
				required
				className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
			/>
			<input
				type="datetime-local"
				value={date}
				onChange={(e) => setDate(e.target.value)}
				required
				className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
			/>
			<button
				type="submit"
				className="w-full p-2 bg-green-500 dark:bg-green-600 text-white rounded"
			>
				Save
			</button>
			<button
				type="button"
				onClick={() => setEditingIndex(null)}
				className="w-full p-2 bg-gray-500 dark:bg-gray-600 text-white rounded"
			>
				Cancel
			</button>
		</form>
	);
};

export default EventList;
