'use strict';

class EventListenerRegistrationCard {

	static init() {
    	ACEController.registerListener('ShowWantedEvent', CardView.showWanted);
    	ACEController.registerListener('ShowNextLineEvent', CardView.showNextLine);
    	ACEController.registerListener('ShowNextWordEvent', CardView.showNextWord);
    	ACEController.registerListener('ShowScoreButtonsEvent', CardView.showScoreButtons);
    	ACEController.registerListener('SaveReinforceCardsEvent', ReinforceView.saveReinforceCardList);
    	ACEController.registerListener('DisplayNextReinforceCardEvent', ContentView.renderNextReinforceCard);
    	ACEController.registerListener('DisplayReinforceFinishedEvent', ContentView.renderReinforceFinished);
    	ACEController.registerListener('RemoveCardFromReinforceCardListEvent', ReinforceView.removeCardFromReinforceCardList);
    	ACEController.registerListener('KeepCardInReinforceCardListEvent', ReinforceView.keepCardInReinforceCardList);
	}

}

EventListenerRegistrationCard.init();

/*       S.D.G.       */
