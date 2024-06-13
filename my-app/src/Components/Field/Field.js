import { FieldLayout } from './FieldLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export function Field({
	isDraw,
	isGameEnded,
	field,
	setFiels,
	currentPlayer,
	setCurrentPlayer,
	setIsDraw,
	setIsGameEnded,
}) {
	const handleClick = (id) => {
		const newField = [...field];
		newField[id] = currentPlayer;
		if (
			WIN_PATTERNS.some((arr) => arr.every((id) => newField[id] === currentPlayer))
		) {
			setIsGameEnded(true);
		} else if (!newField.includes('') && !isGameEnded) {
			setIsDraw(true);
		} else {
			setCurrentPlayer((prev) => (prev === 'X' ? '0' : 'X'));
		}

		setFiels(newField);
	};

	return (
		<FieldLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			field={field}
			handleClick={handleClick}
		/>
	);
}
