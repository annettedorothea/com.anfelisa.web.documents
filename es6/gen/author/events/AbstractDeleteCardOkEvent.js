import Event from "../../../gen/ace/Event";

export default class AbstractDeleteCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.DeleteCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.hideConfirmDelete" ];
	}
}


/*       S.D.G.       */
