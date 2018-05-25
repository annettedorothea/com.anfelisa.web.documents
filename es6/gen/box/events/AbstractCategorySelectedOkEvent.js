import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCategorySelectedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.CategorySelectedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.CreateBoxView.categorySelected" ];
	}
}


/*       S.D.G.       */
