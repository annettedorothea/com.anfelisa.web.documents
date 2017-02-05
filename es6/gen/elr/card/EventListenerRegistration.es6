'use strict';

class EventListenerRegistrationCard {

	static init() {
    	ACEController.registerListener('ShowWantedEvent', CardView.showWanted);
    	ACEController.registerListener('ShowNextLineEvent', CardView.showNextLine);
    	ACEController.registerListener('ShowNextWordEvent', CardView.showNextWord);
    	ACEController.registerListener('ShowScoreButtonsEvent', CardView.showScoreButtons);
	}

}

EventListenerRegistrationCard.init();

/*       S.D.G.       */
