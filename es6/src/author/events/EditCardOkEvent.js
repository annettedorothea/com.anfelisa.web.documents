import AbstractEditCardOkEvent from "../../../gen/author/events/AbstractEditCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class EditCardOkEvent extends AbstractEditCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
