import Event from "../../../gen/ace/Event";

export default class AbstractRenderChangePasswordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.RenderChangePasswordEvent');
    }
}

/*       S.D.G.       */
