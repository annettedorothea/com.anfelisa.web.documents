import AbstractLoadCategoriesUnauthorizedEvent from "../../../gen/author/events/AbstractLoadCategoriesUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadCategoriesUnauthorizedEvent extends AbstractLoadCategoriesUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
