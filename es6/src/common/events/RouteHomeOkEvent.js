import AbstractRouteHomeOkEvent from "../../../gen/common/events/AbstractRouteHomeOkEvent";
import AppUtils from "../../app/AppUtils";

export default class RouteHomeOkEvent extends AbstractRouteHomeOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
