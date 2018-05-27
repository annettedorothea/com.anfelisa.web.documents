import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractWantedOfNewCardChangedOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.WantedOfNewCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
