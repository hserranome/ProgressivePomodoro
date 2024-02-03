import { useMemo } from "react";

export const useFormattedTime = (time: number) => {
	const { minutes, seconds } = useMemo(() => {
		const seconds = Math.floor((time / 1000) % 60);
		const minutes = Math.floor((time / (1000 * 60)) % 60);

		return {
			minutes: String(minutes).padStart(2, "0"),
			seconds: String(seconds).padStart(2, "0"),
		};
	}, [time]);

	return { minutes, seconds };
};
