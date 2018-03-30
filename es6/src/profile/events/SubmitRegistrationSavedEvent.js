import AbstractSubmitRegistrationSavedEvent from "../../../gen/profile/events/AbstractSubmitRegistrationSavedEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitRegistrationSavedEvent extends AbstractSubmitRegistrationSavedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
