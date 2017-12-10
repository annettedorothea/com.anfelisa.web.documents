import AbstractRenderBoxEvent from "../../../gen/profile/events/AbstractRenderBoxEvent";

export default class RenderBoxEvent extends AbstractRenderBoxEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
