import Event from "../../../gen/ace/Event";

export default class AbstractLoadCategoriesOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.LoadCategoriesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.render" ];
	}
}


/*       S.D.G.       */
