import AbstractNameOfNewCategoryChangedOkEvent from "../../../gen/author/events/AbstractNameOfNewCategoryChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class NameOfNewCategoryChangedOkEvent extends AbstractNameOfNewCategoryChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
