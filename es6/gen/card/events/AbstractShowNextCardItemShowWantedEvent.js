import Event from "../../../gen/ace/Event";

export default class AbstractShowNextCardItemShowWantedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.ShowNextCardItemShowWantedEvent');
    }
	getNotifiedListeners() {
	    return [ "card.views.CardView.showWanted", "card.views.CardView.showScoreButtons" ];
	}
}


/*       S.D.G.       */
