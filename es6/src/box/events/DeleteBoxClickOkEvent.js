import AbstractDeleteBoxClickOkEvent from "../../../gen/box/events/AbstractDeleteBoxClickOkEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteBoxClickOkEvent extends AbstractDeleteBoxClickOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
