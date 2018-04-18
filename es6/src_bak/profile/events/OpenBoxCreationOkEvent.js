import AbstractOpenBoxCreationOkEvent from "../../../gen/profile/events/AbstractOpenBoxCreationOkEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenBoxCreationOkEvent extends AbstractOpenBoxCreationOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
