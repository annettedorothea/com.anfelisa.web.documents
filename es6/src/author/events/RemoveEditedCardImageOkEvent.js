import AbstractRemoveEditedCardImageOkEvent from "../../../gen/author/events/AbstractRemoveEditedCardImageOkEvent";
import AppUtils from "../../app/AppUtils";

export default class RemoveEditedCardImageOkEvent extends AbstractRemoveEditedCardImageOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
