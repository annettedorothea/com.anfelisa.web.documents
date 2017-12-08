import Event from "../../../gen/ace/Event";

export default class AbstractRenderNewPasswordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.RenderNewPasswordEvent');
    }
}

/*       S.D.G.       */
