import AbstractRouteChangedProfileEvent from "../../../gen/common/events/AbstractRouteChangedProfileEvent";
import AppUtils from "../../app/AppUtils";

export default class RouteChangedProfileEvent extends AbstractRouteChangedProfileEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
