import Event from "../../../gen/ace/Event";

export default class AbstractGetAllUsersUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'admin.GetAllUsersUnauthorizedEvent');
    }
}


/*       S.D.G.       */
