import AbstractGivenLanguageOfEditedCategoryChangedOkEvent
    from "../../../gen/author/events/AbstractGivenLanguageOfEditedCategoryChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class GivenLanguageOfEditedCategoryChangedOkEvent extends AbstractGivenLanguageOfEditedCategoryChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
