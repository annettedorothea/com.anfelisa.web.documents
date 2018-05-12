import AbstractFilterCardsOkEvent from "../../../gen/author/events/AbstractFilterCardsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class FilterCardsOkEvent extends AbstractFilterCardsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
