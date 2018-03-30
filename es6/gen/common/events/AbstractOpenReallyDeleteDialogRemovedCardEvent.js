import Event from "../../../gen/ace/Event";

export default class AbstractOpenReallyDeleteDialogRemovedCardEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.OpenReallyDeleteDialogRemovedCardEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ReallyDeleteDialogView.displayRemoveCardFromBoxDialog" ];
	}
}


/*       S.D.G.       */
