import Event from "../../../gen/ace/Event";

export default class AbstractDeleteCardClickOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.DeleteCardClickOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.displayConfirmDelete" ];
	}
}


/*       S.D.G.       */
