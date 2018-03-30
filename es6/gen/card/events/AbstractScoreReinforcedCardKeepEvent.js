import Event from "../../../gen/ace/Event";

export default class AbstractScoreReinforcedCardKeepEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.ScoreReinforcedCardKeepEvent');
    }
	getNotifiedListeners() {
	    return [ "card.views.ReinforceView.keepCardInReinforceCardList" ];
	}
}


/*       S.D.G.       */
