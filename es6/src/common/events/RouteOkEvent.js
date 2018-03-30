import AbstractRouteOkEvent from "../../../gen/common/events/AbstractRouteOkEvent";
import AppUtils from "../../app/AppUtils";

export default class RouteOkEvent extends AbstractRouteOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
