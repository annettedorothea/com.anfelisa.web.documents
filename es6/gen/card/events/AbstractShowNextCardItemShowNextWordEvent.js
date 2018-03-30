import Event from "../../../gen/ace/Event";

export default class AbstractShowNextCardItemShowNextWordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.ShowNextCardItemShowNextWordEvent');
    }
	getNotifiedListeners() {
	    return [ "card.views.CardView.showNextWord" ];
	}
}


/*       S.D.G.       */
