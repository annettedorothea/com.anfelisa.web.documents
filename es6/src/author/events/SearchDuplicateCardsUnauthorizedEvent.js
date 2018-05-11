import AbstractSearchDuplicateCardsUnauthorizedEvent from "../../../gen/author/events/AbstractSearchDuplicateCardsUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class SearchDuplicateCardsUnauthorizedEvent extends AbstractSearchDuplicateCardsUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
