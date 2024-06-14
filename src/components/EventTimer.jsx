import React, { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

const EventTimer = ({ event }) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(event.date));

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft(event.date));
		}, 1000);
		return () => clearInterval(timer);
	}, [event.date]);

	function calculateTimeLeft(targetDate) {
		const difference = differenceInSeconds(new Date(targetDate), new Date());
		if (difference <= 0) {
			return null;
		}
		const days = Math.floor(difference / (60 * 60 * 24));
		const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
		const minutes = Math.floor((difference % (60 * 60)) / 60);
		const seconds = difference % 60;
		return { days, hours, minutes, seconds };
	}

	if (!timeLeft) return <div>Event has passed</div>;

	return (
		<div className="text-center">
			<h2 className="text-2xl font-bold">{event.name}</h2>
			<p className="text-xl">
				{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {" "}
				{timeLeft.seconds}s
			</p>
		</div>
	);
};

export default EventTimer;
