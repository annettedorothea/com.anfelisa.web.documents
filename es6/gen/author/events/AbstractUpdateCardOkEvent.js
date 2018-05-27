import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractUpdateCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.UpdateCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditCardValues" ];
	}
}


/*       S.D.G.       */
