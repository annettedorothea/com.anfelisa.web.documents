import AbstractSearchCardsUnauthorizedEvent from "../../../gen/author/events/AbstractSearchCardsUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class SearchCardsUnauthorizedEvent extends AbstractSearchCardsUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
