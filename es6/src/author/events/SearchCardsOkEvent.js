import AbstractSearchCardsOkEvent from "../../../gen/author/events/AbstractSearchCardsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class SearchCardsOkEvent extends AbstractSearchCardsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
