import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCreateCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CreateCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewCardValues" ];
	}
}


/*       S.D.G.       */
