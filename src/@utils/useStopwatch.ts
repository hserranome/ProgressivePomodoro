import { useEffect, useMemo, useState } from "react";
import { useTimer } from "./useTimer";

export const useStopwatch = (time: number = 1) => {
	const [alarmTriggered, setAlarmTriggered] = useState(false);
	const { elapsedTime, isRunning, handleStart, handlePause, handleReset } = useTimer();

	const remainingTime = useMemo(() => Math.max(time * 60 * 1000 - elapsedTime, 0), [time, elapsedTime]);

	const isFinished = useMemo(() => remainingTime <= 0, [remainingTime]);

	useEffect(() => {
		if (isFinished && !alarmTriggered) {
			handlePause();
			setAlarmTriggered(true);
			alert("Time's up!");
		}
	}, [isFinished, alarmTriggered, handlePause]);

	return { remainingTime, elapsedTime, isRunning, handleStart, handlePause, handleReset };
};
