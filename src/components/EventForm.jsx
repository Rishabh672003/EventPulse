import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addEvent({ name, date });
		setName("");
		setDate("");
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4 p-4">
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Event Name"
				required
				className="w-full p-2 border rounded"
			/>
			<input
				type="datetime-local"
				value={date}
				onChange={(e) => setDate(e.target.value)}
				required
				className="w-full p-2 border rounded"
			/>
			<button
				type="submit"
				className="w-full p-2 bg-blue-500 text-white rounded"
			>
				Add Event
			</button>
		</form>
	);
};

export default EventForm;
