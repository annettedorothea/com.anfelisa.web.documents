import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.DeleteCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideConfirmCardDelete" ];
	}
}


/*       S.D.G.       */
