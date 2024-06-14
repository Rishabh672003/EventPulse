import React, { useState } from "react";
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

const App = () => {
	const [events, setEvents] = useState([]);

	const addEvent = (event) => {
		setEvents([...events, event]);
	};

	const updateEvent = (index, updatedEvent) => {
		const newEvents = [...events];
		newEvents[index] = updatedEvent;
		setEvents(newEvents);
	};

	const deleteEvent = (index) => {
		setEvents(events.filter((_, i) => i !== index));
	};

	return (
		<div className="min-h-screen bg-gray-100">
			<Header />
			<div className="container mx-auto py-8">
				<EventList
					events={events}
					updateEvent={updateEvent}
					deleteEvent={deleteEvent}
				/>
				<div className="mt-8">
					<EventForm addEvent={addEvent} />
				</div>
			</div>
		</div>
	);
};

export default App;
