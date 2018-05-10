import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelDeleteCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelDeleteCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideConfirmCardDelete" ];
	}
}


/*       S.D.G.       */
