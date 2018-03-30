import ACEController from "../ace/ACEController";
import CardView from "../../src/card/views/CardView";
import ContentView from "../../src/navigation/views/ContentView";
import ReinforceView from "../../src/card/views/ReinforceView";

export default class EventListenerRegistrationCard {

	static init() {
		ACEController.registerListener('card.ShowNextCardItemShowWantedEvent', CardView.showWanted);
		ACEController.registerListener('card.ShowNextCardItemShowWantedEvent', CardView.showScoreButtons);
		ACEController.registerListener('card.ShowNextCardItemShowNextLineEvent', CardView.showNextLine);
		ACEController.registerListener('card.ShowNextCardItemShowNextWordEvent', CardView.showNextWord);
		ACEController.registerListener('card.CheckIfComplexCardIsFinishedComplexCardIsFinishedEvent', CardView.showScoreButtons);
		ACEController.registerListener('card.DisplayNextReinforceCardNextEvent', ContentView.renderNextReinforceCard);
		ACEController.registerListener('card.DisplayNextReinforceCardFinishedEvent', ContentView.renderReinforceFinished);
		ACEController.registerListener('card.ScoreReinforcedCardKeepEvent', ReinforceView.keepCardInReinforceCardList);
		ACEController.registerListener('card.ScoreReinforcedCardRemoveEvent', ReinforceView.removeCardFromReinforceCardList);
	}

}

/*       S.D.G.       */
