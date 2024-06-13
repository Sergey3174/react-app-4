import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export function FieldLayout({ isDraw, isGameEnded, field, handleClick }) {
	return (
		<>
			<h1 className={styles.text}>Игровое поле</h1>
			<div className={styles.container}>
				{field.map((sign, id) => {
					return (
						<button
							className={styles.btn}
							disabled={sign || isGameEnded || isDraw ? true : false}
							key={id}
							onClick={() => handleClick(id)}
						>
							{sign}
						</button>
					);
				})}
			</div>
		</>
	);
}

FieldLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
