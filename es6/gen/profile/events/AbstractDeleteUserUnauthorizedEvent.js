import Event from "../../../gen/ace/Event";

export default class AbstractDeleteUserUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'profile.DeleteUserUnauthorizedEvent');
    }
}


/*       S.D.G.       */
