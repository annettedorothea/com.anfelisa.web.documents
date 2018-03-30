import AbstractRenderHomeOkEvent from "../../../gen/common/events/AbstractRenderHomeOkEvent";
import AppUtils from "../../app/AppUtils";

export default class RenderHomeOkEvent extends AbstractRenderHomeOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
