import AbstractUpdatePasswordMismatchEvent from "../../../gen/profile/events/AbstractUpdatePasswordMismatchEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdatePasswordMismatchEvent extends AbstractUpdatePasswordMismatchEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
