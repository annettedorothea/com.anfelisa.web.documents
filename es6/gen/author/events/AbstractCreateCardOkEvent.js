import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCreateCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CreateCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewCardValues" ];
	}
}


/*       S.D.G.       */
