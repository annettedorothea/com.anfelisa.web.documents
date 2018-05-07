import AbstractCancelDeleteCardOkEvent from "../../../gen/author/events/AbstractCancelDeleteCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CancelDeleteCardOkEvent extends AbstractCancelDeleteCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
