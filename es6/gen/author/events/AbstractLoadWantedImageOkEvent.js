import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadWantedImageOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.LoadWantedImageOkEvent');
    }
	getNotifiedListeners() {
	    return [ "author.views.CategoriesView.displayImage" ];
	}
}


/*       S.D.G.       */
