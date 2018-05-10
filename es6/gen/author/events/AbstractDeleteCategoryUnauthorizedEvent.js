import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteCategoryUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.DeleteCategoryUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError", "author.views.CategoriesView.hideConfirmCategoryDelete" ];
	}
}


/*       S.D.G.       */
