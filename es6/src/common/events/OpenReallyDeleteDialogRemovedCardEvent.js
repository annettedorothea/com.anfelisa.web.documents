import AbstractOpenReallyDeleteDialogRemovedCardEvent from "../../../gen/common/events/AbstractOpenReallyDeleteDialogRemovedCardEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenReallyDeleteDialogRemovedCardEvent extends AbstractOpenReallyDeleteDialogRemovedCardEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
