import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggleInputOrderOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.ToggleInputOrderOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.toggleInputOrder" ];
	}
}


/*       S.D.G.       */
