import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractFilterCardsOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.FilterCardsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.filterChanged" ];
	}
}


/*       S.D.G.       */
