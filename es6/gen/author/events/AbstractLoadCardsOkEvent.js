import Event from "../../../gen/ace/Event";

export default class AbstractLoadCardsOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.LoadCardsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.render" ];
	}
}


/*       S.D.G.       */
