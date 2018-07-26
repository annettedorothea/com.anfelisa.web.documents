import AbstractPasswordChangedMismatchEvent from "../../../gen/common/events/AbstractPasswordChangedMismatchEvent";
import AppUtils from "../../app/AppUtils";

export default class PasswordChangedMismatchEvent extends AbstractPasswordChangedMismatchEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
