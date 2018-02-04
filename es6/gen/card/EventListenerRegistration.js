import ACEController from "../ace/ACEController";
import CardView from "../../src/card/views/CardView";
import ReinforceView from "../../src/card/views/ReinforceView";
import ContentView from "../../src/navigation/views/ContentView";

export default class EventListenerRegistrationCard {

	static init() {
		ACEController.registerListener('card.ShowWantedEvent', CardView.showWanted);
		ACEController.registerListener('card.ShowNextLineEvent', CardView.showNextLine);
		ACEController.registerListener('card.ShowNextWordEvent', CardView.showNextWord);
		ACEController.registerListener('card.ShowScoreButtonsEvent', CardView.showScoreButtons);
		ACEController.registerListener('card.SaveReinforceCardsEvent', ReinforceView.saveReinforceCardList);
		ACEController.registerListener('card.DisplayNextReinforceCardEvent', ContentView.renderNextReinforceCard);
		ACEController.registerListener('card.DisplayReinforceFinishedEvent', ContentView.renderReinforceFinished);
		ACEController.registerListener('card.RemoveCardFromReinforceCardListEvent', ReinforceView.removeCardFromReinforceCardList);
		ACEController.registerListener('card.KeepCardInReinforceCardListEvent', ReinforceView.keepCardInReinforceCardList);
	}

}

/*       S.D.G.       */
