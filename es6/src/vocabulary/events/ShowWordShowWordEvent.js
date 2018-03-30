import AbstractShowWordShowWordEvent from "../../../gen/vocabulary/events/AbstractShowWordShowWordEvent";
import AppUtils from "../../app/AppUtils";

export default class ShowWordShowWordEvent extends AbstractShowWordShowWordEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
