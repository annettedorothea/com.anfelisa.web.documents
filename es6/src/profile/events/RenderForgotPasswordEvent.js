import AbstractRenderForgotPasswordEvent from "../../../gen/profile/events/AbstractRenderForgotPasswordEvent";

export default class RenderForgotPasswordEvent extends AbstractRenderForgotPasswordEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
