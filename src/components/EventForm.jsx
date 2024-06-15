import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addEvent({ name, date, description });
		setName("");
		setDate("");
		setDescription("");
	};

	return (
		<div className="p-4 border rounded shadow-md w-1/3 mx-auto bg-white dark:bg-gray-800">
			<h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
				Add Event
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Event Name"
					required
					className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
				/>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Event Description"
					className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
				/>
				<input
					type="datetime-local"
					value={date}
					onChange={(e) => setDate(e.target.value)}
					required
					className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
				/>
				<button
					type="submit"
					className="w-full p-2 bg-blue-500 text-white rounded"
				>
					Add Event
				</button>
			</form>
		</div>
	);
};

export default EventForm;
