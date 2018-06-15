import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayWantedReinforceAllEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.DisplayWantedReinforceAllEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxReinforceView.displayNextItem", "box.views.BoxReinforceView.enableScoreButtons" ];
	}
}


/*       S.D.G.       */
