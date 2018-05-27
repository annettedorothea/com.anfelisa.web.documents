import AbstractCancelNewCardOkEvent from "../../../gen/author/events/AbstractCancelNewCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CancelNewCardOkEvent extends AbstractCancelNewCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
