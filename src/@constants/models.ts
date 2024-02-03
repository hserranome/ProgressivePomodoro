export type Label = {
	id: string;
	title: string;
	color?: string;
};

export enum SetType {
	WORK = "WORK",
	REST = "REST",
}

export type Set = {
	id: string;
	time: number;
	type: SetType;
};

export type Routine = {
	id: string;
	title: string;
	sets: Set[];
};
