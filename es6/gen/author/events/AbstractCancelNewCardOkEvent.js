import Event from "../../../gen/ace/Event";

export default class AbstractCancelNewCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelNewCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.resetNewValues" ];
	}
}


/*       S.D.G.       */
