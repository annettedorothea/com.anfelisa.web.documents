import AbstractLoadRootCategoriesUnauthorizedEvent from "../../../gen/box/events/AbstractLoadRootCategoriesUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadRootCategoriesUnauthorizedEvent extends AbstractLoadRootCategoriesUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
