import AbstractReadBoxesUnauthorizedEvent from "../../../gen/navigation/events/AbstractReadBoxesUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadBoxesUnauthorizedEvent extends AbstractReadBoxesUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
