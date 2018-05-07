import Event from "../../../gen/ace/Event";

export default class AbstractEditCardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.EditCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CardsView.editCard" ];
	}
}


/*       S.D.G.       */
