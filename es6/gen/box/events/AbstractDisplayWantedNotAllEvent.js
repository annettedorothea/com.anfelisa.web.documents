import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayWantedNotAllEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.DisplayWantedNotAllEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxView.displayNextItem" ];
	}
}


/*       S.D.G.       */
