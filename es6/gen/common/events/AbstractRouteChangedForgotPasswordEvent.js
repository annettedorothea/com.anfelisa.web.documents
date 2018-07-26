import Event from "../../../gen/ace/Event";

export default class AbstractRouteChangedForgotPasswordEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.RouteChangedForgotPasswordEvent');
    }
}


/*       S.D.G.       */
