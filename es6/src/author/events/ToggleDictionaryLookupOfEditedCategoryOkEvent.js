import AbstractToggleDictionaryLookupOfEditedCategoryOkEvent from "../../../gen/author/events/AbstractToggleDictionaryLookupOfEditedCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleDictionaryLookupOfEditedCategoryOkEvent extends AbstractToggleDictionaryLookupOfEditedCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
