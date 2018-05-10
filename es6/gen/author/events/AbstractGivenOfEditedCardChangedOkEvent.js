import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractGivenOfEditedCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.GivenOfEditedCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.givenOfEditedCardChanged" ];
	}
}


/*       S.D.G.       */
