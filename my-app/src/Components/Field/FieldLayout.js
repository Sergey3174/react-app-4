import styles from './FieldLayout.module.css';

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
