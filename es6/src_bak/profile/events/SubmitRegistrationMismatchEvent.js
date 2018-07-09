import AbstractSubmitRegistrationMismatchEvent
    from "../../../gen/profile/events/AbstractSubmitRegistrationMismatchEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitRegistrationMismatchEvent extends AbstractSubmitRegistrationMismatchEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
