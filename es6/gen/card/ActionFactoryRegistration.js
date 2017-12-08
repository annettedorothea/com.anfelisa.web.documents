import ACEController from "../ace/ACEController";
import ShowNextCardItemAction from "../../src/card/actions/ShowNextCardItemAction";
import CheckIfComplexCardIsFinishedAction from "../../src/card/actions/CheckIfComplexCardIsFinishedAction";
import FinishCardAction from "../../src/card/actions/FinishCardAction";
import ScoreCardAction from "../../src/card/actions/ScoreCardAction";
import RemoveCardFromBoxAction from "../../src/card/actions/RemoveCardFromBoxAction";
import DisplayNextReinforceCardAction from "../../src/card/actions/DisplayNextReinforceCardAction";
import ScoreReinforcedCardAction from "../../src/card/actions/ScoreReinforcedCardAction";
import RecalculateScheduledCardsAction from "../../src/card/actions/RecalculateScheduledCardsAction";

export default class ActionFactoryRegistrationCard {

	static init() {
		ACEController.registerFactory('card.ShowNextCardItemAction', (actionParam) => new ShowNextCardItemAction(actionParam));
		ACEController.registerFactory('card.CheckIfComplexCardIsFinishedAction', (actionParam) => new CheckIfComplexCardIsFinishedAction(actionParam));
		ACEController.registerFactory('card.FinishCardAction', (actionParam) => new FinishCardAction(actionParam));
		ACEController.registerFactory('card.ScoreCardAction', (actionParam) => new ScoreCardAction(actionParam));
		ACEController.registerFactory('card.RemoveCardFromBoxAction', (actionParam) => new RemoveCardFromBoxAction(actionParam));
		ACEController.registerFactory('card.DisplayNextReinforceCardAction', (actionParam) => new DisplayNextReinforceCardAction(actionParam));
		ACEController.registerFactory('card.ScoreReinforcedCardAction', (actionParam) => new ScoreReinforcedCardAction(actionParam));
		ACEController.registerFactory('card.RecalculateScheduledCardsAction', (actionParam) => new RecalculateScheduledCardsAction(actionParam));
	}

}

/*       S.D.G.       */
