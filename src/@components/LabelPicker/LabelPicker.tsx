import { Label } from "../../@constants/models";

type LabelPickerProps = {
	currentLabel: Label;
};

export const LabelPicker: React.FC<LabelPickerProps> = ({ currentLabel }) => {
	return (
		<div>
			<button>{currentLabel.title}</button>
		</div>
	);
};
