import AbstractInitRegistrationEvent from "../../../gen/common/events/AbstractInitRegistrationEvent";
import AppUtils from "../../app/AppUtils";

export default class InitRegistrationEvent extends AbstractInitRegistrationEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
