import AbstractCreateCardOkEvent from "../../../gen/author/events/AbstractCreateCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CreateCardOkEvent extends AbstractCreateCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
