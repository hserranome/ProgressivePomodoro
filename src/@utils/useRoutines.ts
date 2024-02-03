import { useState } from "react";
import { Routine, SetType } from "../@constants/models";

const defaultRoutines: Routine[] = [
	{
		id: "1",
		title: "Default Routine",
		sets: [
			{
				id: "1",
				time: 1,
				type: SetType.WORK,
			},
			{
				id: "2",
				time: 1,
				type: SetType.REST,
			},
		],
	},
];

export const useRoutines = () => {
	const [routines] = useState<Routine[]>(defaultRoutines);
	const [currentRoutine, setCurrentRoutine] = useState<Routine | null>(null);

	const handleSetCurrentRoutineById = (id: string) => {
		const routine = routines.find((routine) => routine.id === id);
		if (routine) setCurrentRoutine(routine);
	};

	return { routines, currentRoutine, setCurrentRoutine: handleSetCurrentRoutineById };
};
