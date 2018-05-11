import AbstractSearchDuplicateCardsTooShortEvent from "../../../gen/author/events/AbstractSearchDuplicateCardsTooShortEvent";
import AppUtils from "../../app/AppUtils";

export default class SearchDuplicateCardsTooShortEvent extends AbstractSearchDuplicateCardsTooShortEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
