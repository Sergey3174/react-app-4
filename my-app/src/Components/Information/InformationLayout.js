import styles from './Information.module.css';

export function InformationLayout({ children }) {
	return <h1 className={styles.texth}>{children}</h1>;
}
