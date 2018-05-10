import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelNewCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelNewCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewCategoryValues" ];
	}
}


/*       S.D.G.       */
