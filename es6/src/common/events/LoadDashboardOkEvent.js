import AbstractLoadDashboardOkEvent from "../../../gen/common/events/AbstractLoadDashboardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadDashboardOkEvent extends AbstractLoadDashboardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
