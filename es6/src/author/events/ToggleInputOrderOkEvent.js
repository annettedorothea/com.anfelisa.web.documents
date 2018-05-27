import AbstractToggleInputOrderOkEvent from "../../../gen/author/events/AbstractToggleInputOrderOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleInputOrderOkEvent extends AbstractToggleInputOrderOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
