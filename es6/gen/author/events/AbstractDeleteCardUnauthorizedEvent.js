import Event from "../../../gen/ace/Event";

export default class AbstractDeleteCardUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.DeleteCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError", "author.views.CategoriesView.hideConfirmCardDelete" ];
	}
}


/*       S.D.G.       */
