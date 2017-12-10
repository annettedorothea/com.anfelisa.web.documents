import AbstractRenderNewPasswordEvent from "../../../gen/profile/events/AbstractRenderNewPasswordEvent";

export default class RenderNewPasswordEvent extends AbstractRenderNewPasswordEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
