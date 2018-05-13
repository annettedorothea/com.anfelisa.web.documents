import AbstractGivenLanguageOfNewCategoryChangedOkEvent from "../../../gen/author/events/AbstractGivenLanguageOfNewCategoryChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class GivenLanguageOfNewCategoryChangedOkEvent extends AbstractGivenLanguageOfNewCategoryChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
