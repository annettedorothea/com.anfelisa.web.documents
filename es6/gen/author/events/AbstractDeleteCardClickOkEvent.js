import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDeleteCardClickOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCardClickOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.displayConfirmCardDelete" ];
	}
}


/*       S.D.G.       */
