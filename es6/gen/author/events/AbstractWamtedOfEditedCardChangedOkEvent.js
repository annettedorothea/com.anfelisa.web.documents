import Event from "../../../gen/ace/Event";

export default class AbstractWamtedOfEditedCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.WamtedOfEditedCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.wantedOfEditedCardChanged" ];
	}
}


/*       S.D.G.       */
