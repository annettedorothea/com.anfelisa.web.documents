import AbstractReadBoxesOkEvent from "../../../gen/navigation/events/AbstractReadBoxesOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadBoxesOkEvent extends AbstractReadBoxesOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
