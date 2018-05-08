import Event from "../../../gen/ace/Event";

export default class AbstractCancelEditCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CancelEditCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditCategoryValues" ];
	}
}


/*       S.D.G.       */
