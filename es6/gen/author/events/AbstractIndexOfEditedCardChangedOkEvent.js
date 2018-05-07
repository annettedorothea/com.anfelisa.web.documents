import Event from "../../../gen/ace/Event";

export default class AbstractIndexOfEditedCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.IndexOfEditedCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.indexOfEditedCardChanged" ];
	}
}


/*       S.D.G.       */
