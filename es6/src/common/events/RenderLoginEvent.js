import AbstractRenderLoginEvent from "../../../gen/common/events/AbstractRenderLoginEvent";

export default class RenderLoginEvent extends AbstractRenderLoginEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
