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
		<div className="p-4 border rounded shadow-md w-1/3 mx-auto">
			<h2 className="text-2xl font-bold mb-4">Add Event</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
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
		</div>
	);
};

export default EventForm;
