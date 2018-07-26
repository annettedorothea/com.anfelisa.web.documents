import AbstractPasswordRepetitionChangedMismatchEvent from "../../../gen/common/events/AbstractPasswordRepetitionChangedMismatchEvent";
import AppUtils from "../../app/AppUtils";

export default class PasswordRepetitionChangedMismatchEvent extends AbstractPasswordRepetitionChangedMismatchEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
