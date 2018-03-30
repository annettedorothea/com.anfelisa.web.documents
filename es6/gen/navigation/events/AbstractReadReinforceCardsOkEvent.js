import Event from "../../../gen/ace/Event";

export default class AbstractReadReinforceCardsOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadReinforceCardsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "card.views.ReinforceView.saveReinforceCardList" ];
	}
}


/*       S.D.G.       */
