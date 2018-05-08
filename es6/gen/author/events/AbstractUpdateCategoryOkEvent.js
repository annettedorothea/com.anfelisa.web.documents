import Event from "../../../gen/ace/Event";

export default class AbstractUpdateCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.UpdateCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditCategoryValues" ];
	}
}


/*       S.D.G.       */
