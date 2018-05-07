import AbstractIndexOfEditedCategoryChangedOkEvent from "../../../gen/author/events/AbstractIndexOfEditedCategoryChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class IndexOfEditedCategoryChangedOkEvent extends AbstractIndexOfEditedCategoryChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
