import AbstractConfirmEmailErrorEvent from "../../../gen/common/events/AbstractConfirmEmailErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class ConfirmEmailErrorEvent extends AbstractConfirmEmailErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
