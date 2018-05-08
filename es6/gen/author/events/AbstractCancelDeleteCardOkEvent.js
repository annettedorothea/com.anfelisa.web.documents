import Event from "../../../gen/ace/Event";

export default class AbstractCancelDeleteCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelDeleteCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideConfirmCardDelete" ];
	}
}


/*       S.D.G.       */
