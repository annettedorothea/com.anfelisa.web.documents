import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelEditCategoryOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CancelEditCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditCategoryValues" ];
	}
}


/*       S.D.G.       */
