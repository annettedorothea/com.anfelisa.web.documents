import AbstractSaveResultNoCredentialsEvent from "../../../gen/common/events/AbstractSaveResultNoCredentialsEvent";
import AppUtils from "../../app/AppUtils";

export default class SaveResultNoCredentialsEvent extends AbstractSaveResultNoCredentialsEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
