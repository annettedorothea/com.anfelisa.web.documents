import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractWantedOfEditedCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.WantedOfEditedCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedOfEditedCardChanged" ];
	}
}


/*       S.D.G.       */
