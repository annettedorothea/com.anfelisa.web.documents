import AbstractToggelUseDictionaryOkEvent from "../../../gen/author/events/AbstractToggelUseDictionaryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggelUseDictionaryOkEvent extends AbstractToggelUseDictionaryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
