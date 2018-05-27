import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractUpdateCategoryOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.UpdateCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditCategoryValues" ];
	}
}


/*       S.D.G.       */
