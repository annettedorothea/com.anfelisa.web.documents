import AbstractRouteChangedDashboardEvent from "../../../gen/common/events/AbstractRouteChangedDashboardEvent";
import AppUtils from "../../app/AppUtils";

export default class RouteChangedDashboardEvent extends AbstractRouteChangedDashboardEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
