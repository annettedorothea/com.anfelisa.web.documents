import AbstractRemoveNewCardImageOkEvent from "../../../gen/author/events/AbstractRemoveNewCardImageOkEvent";
import AppUtils from "../../app/AppUtils";

export default class RemoveNewCardImageOkEvent extends AbstractRemoveNewCardImageOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
