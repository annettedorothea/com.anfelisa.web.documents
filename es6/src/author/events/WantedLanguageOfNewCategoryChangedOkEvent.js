import AbstractWantedLanguageOfNewCategoryChangedOkEvent from "../../../gen/author/events/AbstractWantedLanguageOfNewCategoryChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class WantedLanguageOfNewCategoryChangedOkEvent extends AbstractWantedLanguageOfNewCategoryChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
