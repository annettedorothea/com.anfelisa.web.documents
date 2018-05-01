import AbstractRouteChangedForgotPasswordEvent from "../../../gen/common/events/AbstractRouteChangedForgotPasswordEvent";
import AppUtils from "../../app/AppUtils";

export default class RouteChangedForgotPasswordEvent extends AbstractRouteChangedForgotPasswordEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
