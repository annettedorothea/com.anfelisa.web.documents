import AbstractUpdateCardOkEvent from "../../../gen/author/events/AbstractUpdateCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdateCardOkEvent extends AbstractUpdateCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
