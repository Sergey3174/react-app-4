import styles from './Information.module.css';
import PropTypes from 'prop-types';

export function InformationLayout({ children }) {
	return <h1 className={styles.texth}>{children}</h1>;
}

InformationLayout.propTypes = {
	children: PropTypes.string,
};
