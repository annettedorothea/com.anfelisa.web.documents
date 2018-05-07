import AbstractDeleteCardOkEvent from "../../../gen/author/events/AbstractDeleteCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteCardOkEvent extends AbstractDeleteCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
