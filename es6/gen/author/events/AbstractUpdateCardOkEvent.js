import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractUpdateCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.UpdateCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditCardValues" ];
	}
}


/*       S.D.G.       */
