import AbstractLoadDashboardUnauthorizedEvent from "../../../gen/common/events/AbstractLoadDashboardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadDashboardUnauthorizedEvent extends AbstractLoadDashboardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
