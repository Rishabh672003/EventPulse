import React, { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

const EventTimer = ({ event }) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(event.date));
	const [hasEnded, setHasEnded] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			const newTimeLeft = calculateTimeLeft(event.date);
			setTimeLeft(newTimeLeft);
			if (newTimeLeft === null && !hasEnded) {
				alert(`Event: ${event.name} has ended`);
				setHasEnded(true);
			}
		}, 1000);
		return () => clearInterval(timer);
	}, [event.date, hasEnded, event.name]);

	useEffect(() => {
		if (calculateTimeLeft(event.date) !== null) {
			setHasEnded(false);
		}
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

	return (
		<div className="text-center">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
				{event.name}
			</h2>
			{timeLeft ? (
				<p className="text-xl text-gray-700 dark:text-gray-300">
					{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
					{timeLeft.seconds}s
				</p>
			) : (
				<p className="text-xl text-gray-700 dark:text-gray-300">
					Event has passed
				</p>
			)}
		</div>
	);
};

export default EventTimer;
