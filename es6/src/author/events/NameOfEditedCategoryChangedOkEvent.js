import AbstractNameOfEditedCategoryChangedOkEvent from "../../../gen/author/events/AbstractNameOfEditedCategoryChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class NameOfEditedCategoryChangedOkEvent extends AbstractNameOfEditedCategoryChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
