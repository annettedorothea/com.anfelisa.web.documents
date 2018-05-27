import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadRootCategoriesOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadRootCategoriesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.CreateBoxView.render" ];
	}
}


/*       S.D.G.       */
