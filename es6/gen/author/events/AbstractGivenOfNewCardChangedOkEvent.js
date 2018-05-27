import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractGivenOfNewCardChangedOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.GivenOfNewCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.givenOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
