import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Timer.module.css";

const Timer = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const mainDate = new Date(selectedDate);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSelectedDate(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className={styles.block}>
			<DatePicker
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date)}
				showTimeSelect
				timeFormat="HH:mm"
				dateFormat="MMMM d, yyyy h:mm aa"
				className="w-full mt-4"
			/>
			<div className={styles.date}>
				<span>{`${mainDate.getMonth()}`}</span>
				<p>months</p>
			</div>

			<div className={styles.date}>
				<span>{`${mainDate.getDate()}`}</span>
				<p>days</p>
			</div>

			<div className={styles.date}>
				<span>{`${mainDate.getHours()}`}</span>
				<p>hours</p>
			</div>

			<div className={styles.date}>
				<span>{`${mainDate.getMinutes()}`}</span>
				<p>minutes</p>
			</div>

			<div className={styles.date}>
				<span>{`${mainDate.getSeconds()}`}</span>
				<p>seconds</p>
			</div>
		</div>
	);
};

export default Timer;
