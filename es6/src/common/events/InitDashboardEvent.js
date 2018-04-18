import AbstractInitDashboardEvent from "../../../gen/common/events/AbstractInitDashboardEvent";
import AppUtils from "../../app/AppUtils";

export default class InitDashboardEvent extends AbstractInitDashboardEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
