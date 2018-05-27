import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteCategoryOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.hideConfirmCategoryDelete" ];
	}
}


/*       S.D.G.       */
