import Event from "../../../gen/ace/Event";

export default class GetAllUsersUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'admin.GetAllUsersUnauthorizedEvent');
    }
}


/*       S.D.G.       */
