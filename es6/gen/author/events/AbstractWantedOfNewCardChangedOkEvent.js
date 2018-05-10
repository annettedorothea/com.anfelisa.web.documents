import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractWantedOfNewCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.WantedOfNewCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
