import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayWantedReinforceImageEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.DisplayWantedReinforceImageEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxReinforceView.displayImage", "box.views.BoxReinforceView.enableScoreButtons" ];
	}
}


/*       S.D.G.       */
