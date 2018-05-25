import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadRootCategoriesOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.LoadRootCategoriesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.CreateBoxView.render" ];
	}
}


/*       S.D.G.       */
