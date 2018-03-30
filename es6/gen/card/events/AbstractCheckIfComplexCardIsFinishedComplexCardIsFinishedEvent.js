import Event from "../../../gen/ace/Event";

export default class AbstractCheckIfComplexCardIsFinishedComplexCardIsFinishedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.CheckIfComplexCardIsFinishedComplexCardIsFinishedEvent');
    }
	getNotifiedListeners() {
	    return [ "card.views.CardView.showScoreButtons" ];
	}
}


/*       S.D.G.       */
