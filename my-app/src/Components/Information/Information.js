import { InformationLayout } from './InformationLayout';

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
