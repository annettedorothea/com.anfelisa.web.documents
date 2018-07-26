import Event from "../../../gen/ace/Event";

export default class AbstractRouteChangedLoginEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.RouteChangedLoginEvent');
    }
}


/*       S.D.G.       */
