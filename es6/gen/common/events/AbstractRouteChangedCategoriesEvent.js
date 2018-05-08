import Event from "../../../gen/ace/Event";

export default class AbstractRouteChangedCategoriesEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RouteChangedCategoriesEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.resetEditCardValues", "author.views.CategoriesView.resetEditCategoryValues", "author.views.CategoriesView.resetNewCardValues", "author.views.CategoriesView.resetNewCategoryValues" ];
	}
}


/*       S.D.G.       */
