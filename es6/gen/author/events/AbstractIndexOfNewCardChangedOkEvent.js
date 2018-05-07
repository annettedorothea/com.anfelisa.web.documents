import Event from "../../../gen/ace/Event";

export default class AbstractIndexOfNewCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.IndexOfNewCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.indexOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
