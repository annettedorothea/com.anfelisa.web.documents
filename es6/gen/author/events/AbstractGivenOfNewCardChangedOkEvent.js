import Event from "../../../gen/ace/Event";

export default class AbstractGivenOfNewCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.GivenOfNewCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.givenOfNewCardChanged" ];
	}
}


/*       S.D.G.       */
