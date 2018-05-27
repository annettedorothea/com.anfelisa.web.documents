import AbstractCancelNewCategoryOkEvent from "../../../gen/author/events/AbstractCancelNewCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CancelNewCategoryOkEvent extends AbstractCancelNewCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
