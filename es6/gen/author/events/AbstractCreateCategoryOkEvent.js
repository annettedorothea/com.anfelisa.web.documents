import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCreateCategoryOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CreateCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetNewCategoryValues" ];
	}
}


/*       S.D.G.       */
