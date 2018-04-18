import AbstractInitProfilePasswordEvent from "../../../gen/common/events/AbstractInitProfilePasswordEvent";
import AppUtils from "../../app/AppUtils";

export default class InitProfilePasswordEvent extends AbstractInitProfilePasswordEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
