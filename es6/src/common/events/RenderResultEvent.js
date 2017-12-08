import AbstractRenderResultEvent from "../../../gen/common/events/AbstractRenderResultEvent";

export default class RenderResultEvent extends AbstractRenderResultEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
