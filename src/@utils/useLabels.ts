import { useState } from "react";
import { Label } from "../@constants/models";

const defaultLabels: Label[] = [
	{
		id: "1",
		title: "Default",
	},
];

export const useLabels = () => {
	const [labels, setLabels] = useState<Label[]>(defaultLabels);
	const [currentLabel, setCurrentLabel] = useState<Label>(defaultLabels[0]);

	const addLabel = (label: Label) => {
		setLabels((labels) => [...labels, label]);
	};

	const removeLabel = (id: string) => {
		setLabels((labels) => labels.filter((label) => label.id !== id));
	};

	const updateLabel = (id: string, title: string) => {
		setLabels((labels) =>
			labels.map((label) => {
				if (label.id === id) return { ...label, title };
				return label;
			})
		);
	};

	const handleSetCurrentLabelById = (id: string) => {
		const label = labels.find((label) => label.id === id);
		if (label) setCurrentLabel(label);
	};

	return { labels, addLabel, removeLabel, updateLabel, currentLabel, setCurrentLabel: handleSetCurrentLabelById };
};
