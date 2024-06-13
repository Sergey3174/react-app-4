import { Field } from './Field/Field';
import { Information } from './Information/Information';
import styles from './app.module.css';
import PropTypes from 'prop-types';

export function AppLayout({ ...state }) {
	return (
		<>
			<Field {...state} />
			<Information
				isDraw={state.isDraw}
				isGameEnded={state.isGameEnded}
				currentPlayer={state.currentPlayer}
			/>
			{state.isDraw || state.isGameEnded ? (
				<button className={styles.btnReset} onClick={state.handleClickReset}>
					Начать заново
				</button>
			) : null}
		</>
	);
}

AppLayout.propTypes = {
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setFiels: PropTypes.func,
	handleClickReset: PropTypes.func,
};
