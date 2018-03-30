import AbstractUpdatePasswordDataInvalidEvent from "../../../gen/profile/events/AbstractUpdatePasswordDataInvalidEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdatePasswordDataInvalidEvent extends AbstractUpdatePasswordDataInvalidEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
