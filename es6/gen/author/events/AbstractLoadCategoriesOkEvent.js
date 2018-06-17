import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadCategoriesOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.LoadCategoriesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.render" ];
	}
}


/*       S.D.G.       */
