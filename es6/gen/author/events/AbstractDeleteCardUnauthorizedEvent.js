import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError", "author.views.CategoriesView.hideConfirmCardDelete" ];
	}
}


/*       S.D.G.       */
