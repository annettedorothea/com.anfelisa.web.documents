import Event from "../../../gen/ace/Event";

export default class AbstractDeleteUserBadRequestEvent extends Event {
    constructor(eventData) {
        super(eventData, 'profile.DeleteUserBadRequestEvent');
    }
}


/*       S.D.G.       */
