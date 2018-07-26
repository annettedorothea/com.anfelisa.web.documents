import AbstractPasswordRepetitionChangedMatchEvent from "../../../gen/common/events/AbstractPasswordRepetitionChangedMatchEvent";
import AppUtils from "../../app/AppUtils";

export default class PasswordRepetitionChangedMatchEvent extends AbstractPasswordRepetitionChangedMatchEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
