import Event from "../../../gen/ace/Event";

export default class AbstractWamtedOfEditedCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.WamtedOfEditedCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.wantedOfEditedCardChanged" ];
	}
}


/*       S.D.G.       */
