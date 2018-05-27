import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelNewCategoryOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CancelNewCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewCategoryValues" ];
	}
}


/*       S.D.G.       */
