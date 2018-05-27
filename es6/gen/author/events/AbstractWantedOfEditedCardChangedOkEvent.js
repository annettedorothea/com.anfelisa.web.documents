import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractWantedOfEditedCardChangedOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.WantedOfEditedCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedOfEditedCardChanged" ];
	}
}


/*       S.D.G.       */
