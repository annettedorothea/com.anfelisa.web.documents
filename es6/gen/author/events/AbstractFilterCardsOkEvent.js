import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractFilterCardsOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.FilterCardsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.filterChanged" ];
	}
}


/*       S.D.G.       */
