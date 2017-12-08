import AbstractRenderLogoutEvent from "../../../gen/common/events/AbstractRenderLogoutEvent";

export default class RenderLogoutEvent extends AbstractRenderLogoutEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
