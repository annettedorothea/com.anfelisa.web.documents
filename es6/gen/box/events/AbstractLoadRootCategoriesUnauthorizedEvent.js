import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadRootCategoriesUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadRootCategoriesUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
