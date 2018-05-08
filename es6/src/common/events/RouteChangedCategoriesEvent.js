import AbstractRouteChangedCategoriesEvent from "../../../gen/common/events/AbstractRouteChangedCategoriesEvent";
import AppUtils from "../../app/AppUtils";

export default class RouteChangedCategoriesEvent extends AbstractRouteChangedCategoriesEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
