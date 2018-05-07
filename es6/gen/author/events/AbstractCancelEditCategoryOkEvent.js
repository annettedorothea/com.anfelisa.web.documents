import Event from "../../../gen/ace/Event";

export default class AbstractCancelEditCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelEditCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditValues" ];
	}
}


/*       S.D.G.       */
