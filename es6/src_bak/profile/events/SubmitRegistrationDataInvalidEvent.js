import AbstractSubmitRegistrationDataInvalidEvent
    from "../../../gen/profile/events/AbstractSubmitRegistrationDataInvalidEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitRegistrationDataInvalidEvent extends AbstractSubmitRegistrationDataInvalidEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
