import AbstractPasswordChangedMatchEvent from "../../../gen/common/events/AbstractPasswordChangedMatchEvent";
import AppUtils from "../../app/AppUtils";

export default class PasswordChangedMatchEvent extends AbstractPasswordChangedMatchEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
