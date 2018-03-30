import Event from "../../../gen/ace/Event";

export default class AbstractScoreReinforcedCardRemoveEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.ScoreReinforcedCardRemoveEvent');
    }
	getNotifiedListeners() {
	    return [ "card.views.ReinforceView.removeCardFromReinforceCardList" ];
	}
}


/*       S.D.G.       */
