import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayWantedReinforceNotAllEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.DisplayWantedReinforceNotAllEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxReinforceView.displayNextItem" ];
	}
}


/*       S.D.G.       */
