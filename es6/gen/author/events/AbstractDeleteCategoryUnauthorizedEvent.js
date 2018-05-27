import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteCategoryUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCategoryUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError", "author.views.CategoriesView.hideConfirmCategoryDelete" ];
	}
}


/*       S.D.G.       */
