import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayWantedImageEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.DisplayWantedImageEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxView.displayImage", "box.views.BoxView.enableScoreButtons" ];
	}
}


/*       S.D.G.       */
