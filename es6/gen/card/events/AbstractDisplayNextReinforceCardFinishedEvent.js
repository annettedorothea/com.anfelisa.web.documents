import Event from "../../../gen/ace/Event";

export default class AbstractDisplayNextReinforceCardFinishedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.DisplayNextReinforceCardFinishedEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.ContentView.renderReinforceFinished" ];
	}
}


/*       S.D.G.       */
