import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';

export function Information({ isDraw, isGameEnded, currentPlayer }) {
	return (
		<>
			{isDraw && <InformationLayout>{'Ничья'}</InformationLayout>}
			{isGameEnded && (
				<InformationLayout>{`Победа ${currentPlayer}`}</InformationLayout>
			)}
			{!isDraw && !isGameEnded && (
				<InformationLayout>{`Ход ${currentPlayer}`}</InformationLayout>
			)}
		</>
	);
}

Information.propTypes = {
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
};
