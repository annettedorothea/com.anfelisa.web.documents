import AbstractOpenRegistrationOkEvent from "../../../gen/profile/events/AbstractOpenRegistrationOkEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenRegistrationOkEvent extends AbstractOpenRegistrationOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
