import AbstractCancelDeleteCategoryOkEvent from "../../../gen/box/events/AbstractCancelDeleteCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CancelDeleteCategoryOkEvent extends AbstractCancelDeleteCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
