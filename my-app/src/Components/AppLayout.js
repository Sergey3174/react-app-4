import { Field } from './Field/Field';
import { Information } from './Information/Information';
import styles from './app.module.css';

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
