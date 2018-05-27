import AbstractLoadDashboardErrorEvent from "../../../gen/common/events/AbstractLoadDashboardErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadDashboardErrorEvent extends AbstractLoadDashboardErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
