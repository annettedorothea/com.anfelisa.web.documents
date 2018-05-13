import AbstractTranslateOkEvent from "../../../gen/author/events/AbstractTranslateOkEvent";
import AppUtils from "../../app/AppUtils";

export default class TranslateOkEvent extends AbstractTranslateOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
