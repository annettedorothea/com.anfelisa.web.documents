import AbstractLoadCategoriesOkEvent from "../../../gen/author/events/AbstractLoadCategoriesOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadCategoriesOkEvent extends AbstractLoadCategoriesOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
