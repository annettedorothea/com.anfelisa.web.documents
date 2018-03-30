import AbstractRenderLoginOkEvent from "../../../gen/common/events/AbstractRenderLoginOkEvent";
import AppUtils from "../../app/AppUtils";

export default class RenderLoginOkEvent extends AbstractRenderLoginOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
