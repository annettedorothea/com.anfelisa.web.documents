import AbstractRouteChangedResetPasswordEvent from "../../../gen/common/events/AbstractRouteChangedResetPasswordEvent";
import AppUtils from "../../app/AppUtils";

export default class RouteChangedResetPasswordEvent extends AbstractRouteChangedResetPasswordEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
