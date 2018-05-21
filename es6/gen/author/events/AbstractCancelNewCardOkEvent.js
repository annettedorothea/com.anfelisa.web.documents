import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelNewCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelNewCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewCardValues", "author.views.CategoriesView.hideDictionary" ];
	}
}


/*       S.D.G.       */
