import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayWantedAllEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.DisplayWantedAllEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxView.displayNextItem", "box.views.BoxView.enableScoreButtons" ];
	}
}


/*       S.D.G.       */
