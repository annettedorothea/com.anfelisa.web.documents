import Event from "../../../gen/ace/Event";

export default class AbstractOpenReallyDeleteDialogDeleteBoxEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.OpenReallyDeleteDialogDeleteBoxEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ReallyDeleteDialogView.displayDeleteBoxDialog" ];
	}
}


/*       S.D.G.       */
