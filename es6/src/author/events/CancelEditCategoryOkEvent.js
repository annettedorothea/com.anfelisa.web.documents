import AbstractCancelEditCategoryOkEvent from "../../../gen/author/events/AbstractCancelEditCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CancelEditCategoryOkEvent extends AbstractCancelEditCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
