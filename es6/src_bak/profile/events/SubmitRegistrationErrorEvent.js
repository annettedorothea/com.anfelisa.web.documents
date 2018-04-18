import AbstractSubmitRegistrationErrorEvent from "../../../gen/profile/events/AbstractSubmitRegistrationErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitRegistrationErrorEvent extends AbstractSubmitRegistrationErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
