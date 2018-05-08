import Event from "../../../gen/ace/Event";

export default class AbstractCancelNewCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelNewCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewCardValues" ];
	}
}


/*       S.D.G.       */
