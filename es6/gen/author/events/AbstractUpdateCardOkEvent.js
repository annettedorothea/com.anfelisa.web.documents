import Event from "../../../gen/ace/Event";

export default class AbstractUpdateCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.UpdateCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.resetEditValues" ];
	}
}


/*       S.D.G.       */
