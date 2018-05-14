import AbstractToggelInputOrderOkEvent from "../../../gen/author/events/AbstractToggelInputOrderOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggelInputOrderOkEvent extends AbstractToggelInputOrderOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
