import Event from "../../../gen/ace/Event";

export default class AbstractLoadUserUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'profile.LoadUserUnauthorizedEvent');
    }
}


/*       S.D.G.       */
