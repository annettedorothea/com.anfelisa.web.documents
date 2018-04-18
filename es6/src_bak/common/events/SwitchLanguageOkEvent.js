import AbstractSwitchLanguageOkEvent from "../../../gen/common/events/AbstractSwitchLanguageOkEvent";
import AppUtils from "../../app/AppUtils";

export default class SwitchLanguageOkEvent extends AbstractSwitchLanguageOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
