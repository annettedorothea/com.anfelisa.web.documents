import Event from "../../../gen/ace/Event";

export default class AbstractOpenReallyDeleteDialogDeleteUserEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.OpenReallyDeleteDialogDeleteUserEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ReallyDeleteDialogView.displayDeleteUserDialog" ];
	}
}


/*       S.D.G.       */
