import Event from "../../../gen/ace/Event";

export default class AbstractRenderForgotPasswordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.RenderForgotPasswordEvent');
    }
}

/*       S.D.G.       */
