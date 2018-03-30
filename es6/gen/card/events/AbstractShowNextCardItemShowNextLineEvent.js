import Event from "../../../gen/ace/Event";

export default class AbstractShowNextCardItemShowNextLineEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.ShowNextCardItemShowNextLineEvent');
    }
	getNotifiedListeners() {
	    return [ "card.views.CardView.showNextLine" ];
	}
}


/*       S.D.G.       */
