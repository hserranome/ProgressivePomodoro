import { useMemo } from "react";
import { useStopwatch, useFormattedTime, useLabels } from "./@utils";
import { LabelPicker } from "./@components";
import "./App.css";

function App() {
	const { remainingTime, isRunning, handleStart, handlePause, handleReset } = useStopwatch();
	const { minutes, seconds } = useFormattedTime(remainingTime);
	const formattedTime = useMemo(() => `${minutes}:${seconds}`, [minutes, seconds]);

	const { currentLabel } = useLabels();

	return (
		<div>
			<LabelPicker currentLabel={currentLabel} />
			<div>
				<p>{formattedTime}</p>
				<br />
			</div>
			<div>
				<span style={{ marginRight: "10px" }}>
					{isRunning && <button onClick={handlePause}>Pause</button>}
					{!isRunning && <button onClick={handleStart}>{remainingTime === 0 ? "Start" : "Resume"}</button>}
				</span>
				<button onClick={handleReset}>Reset</button>
			</div>
		</div>
	);
}

export default App;
