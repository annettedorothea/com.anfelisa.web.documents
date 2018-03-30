import Event from "../../../gen/ace/Event";

export default class AbstractOpenReallyDeleteDialogRemoveCourseFromUserEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.OpenReallyDeleteDialogRemoveCourseFromUserEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ReallyDeleteDialogView.displayRemoveCourseFromUserDialog" ];
	}
}


/*       S.D.G.       */
