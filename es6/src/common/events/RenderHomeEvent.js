import AbstractRenderHomeEvent from "../../../gen/common/events/AbstractRenderHomeEvent";

export default class RenderHomeEvent extends AbstractRenderHomeEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
