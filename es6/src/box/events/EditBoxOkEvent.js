import AbstractEditBoxOkEvent from "../../../gen/box/events/AbstractEditBoxOkEvent";
import AppUtils from "../../app/AppUtils";

export default class EditBoxOkEvent extends AbstractEditBoxOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
