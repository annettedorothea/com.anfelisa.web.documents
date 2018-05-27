import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelDeleteCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CancelDeleteCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideConfirmCardDelete" ];
	}
}


/*       S.D.G.       */
