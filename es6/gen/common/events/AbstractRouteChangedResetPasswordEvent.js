import Event from "../../../gen/ace/Event";

export default class AbstractRouteChangedResetPasswordEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.RouteChangedResetPasswordEvent');
    }
}


/*       S.D.G.       */
