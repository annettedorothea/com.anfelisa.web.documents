import ACEController from "../ace/ACEController";
import CardListView from "../../src/card/views/CardListView";

export default class EventListenerRegistrationCard {

	static init() {
		ACEController.registerListener('card.LoadCardsOkEvent', CardListView.render);
	}

}

/*       S.D.G.       */
