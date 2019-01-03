import ACEController from "../ace/ACEController";
import LoadCardsAction from "../../src/card/actions/LoadCardsAction";

export default class ActionFactoryRegistrationCard {

	static init() {
		ACEController.registerFactory('card.LoadCardsAction', (actionData) => new LoadCardsAction(actionData, 'card.LoadCardsAction'));
	}

}

/*       S.D.G.       */
