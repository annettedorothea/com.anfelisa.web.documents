import Event from "../../../gen/ace/Event";

export default class AbstractDisplayNextReinforceCardNextEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.DisplayNextReinforceCardNextEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.ContentView.renderNextReinforceCard" ];
	}
}


/*       S.D.G.       */
