import AbstractIndexOfNewCategoryChangedOkEvent from "../../../gen/author/events/AbstractIndexOfNewCategoryChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class IndexOfNewCategoryChangedOkEvent extends AbstractIndexOfNewCategoryChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
