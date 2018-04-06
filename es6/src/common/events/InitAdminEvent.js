import AbstractInitAdminEvent from "../../../gen/common/events/AbstractInitAdminEvent";
import AppUtils from "../../app/AppUtils";

export default class InitAdminEvent extends AbstractInitAdminEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
