import AbstractInitialLoginOkEvent from "../../../gen/common/events/AbstractInitialLoginOkEvent";
import AppUtils from "../../app/AppUtils";

export default class InitialLoginOkEvent extends AbstractInitialLoginOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */