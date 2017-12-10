import AbstractRenderChangePasswordEvent from "../../../gen/profile/events/AbstractRenderChangePasswordEvent";

export default class RenderChangePasswordEvent extends AbstractRenderChangePasswordEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
