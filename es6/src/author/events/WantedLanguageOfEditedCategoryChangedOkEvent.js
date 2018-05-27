import AbstractWantedLanguageOfEditedCategoryChangedOkEvent from "../../../gen/author/events/AbstractWantedLanguageOfEditedCategoryChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class WantedLanguageOfEditedCategoryChangedOkEvent extends AbstractWantedLanguageOfEditedCategoryChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
