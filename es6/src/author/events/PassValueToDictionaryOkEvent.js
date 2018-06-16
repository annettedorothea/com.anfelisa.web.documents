import AbstractPassValueToDictionaryOkEvent from "../../../gen/author/events/AbstractPassValueToDictionaryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class PassValueToDictionaryOkEvent extends AbstractPassValueToDictionaryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
