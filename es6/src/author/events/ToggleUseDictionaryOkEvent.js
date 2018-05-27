import AbstractToggleUseDictionaryOkEvent from "../../../gen/author/events/AbstractToggleUseDictionaryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleUseDictionaryOkEvent extends AbstractToggleUseDictionaryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
