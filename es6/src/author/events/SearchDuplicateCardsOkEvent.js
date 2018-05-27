import AbstractSearchDuplicateCardsOkEvent from "../../../gen/author/events/AbstractSearchDuplicateCardsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class SearchDuplicateCardsOkEvent extends AbstractSearchDuplicateCardsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
