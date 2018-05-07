import Event from "../../../gen/ace/Event";

export default class AbstractGivenOfEditedCardChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.GivenOfEditedCardChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.givenOfEditedCardChanged" ];
	}
}


/*       S.D.G.       */
