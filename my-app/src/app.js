import { AppLayout } from './Components/AppLayout';
import { useState } from 'react';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setFiels] = useState(['', '', '', '', '', '', '', '', '']);

	const state = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setFiels,
	};

	const handleClickReset = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setFiels(['', '', '', '', '', '', '', '', '']);
	};

	return <AppLayout {...state} handleClickReset={handleClickReset} />;
};
