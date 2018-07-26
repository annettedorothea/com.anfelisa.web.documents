import Event from "../../../gen/ace/Event";

export default class AbstractRouteChangedRegistrationEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.RouteChangedRegistrationEvent');
    }
}


/*       S.D.G.       */
