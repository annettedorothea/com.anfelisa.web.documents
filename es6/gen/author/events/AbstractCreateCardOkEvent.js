import Event from "../../../gen/ace/Event";

export default class AbstractCreateCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CreateCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.resetNewValues" ];
	}
}


/*       S.D.G.       */
