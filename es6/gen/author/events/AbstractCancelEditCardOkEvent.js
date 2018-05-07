import Event from "../../../gen/ace/Event";

export default class AbstractCancelEditCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelEditCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.resetEditValues" ];
	}
}


/*       S.D.G.       */
