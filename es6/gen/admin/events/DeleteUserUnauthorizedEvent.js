import Event from "../../../gen/ace/Event";

export default class DeleteUserUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'admin.DeleteUserUnauthorizedEvent');
    }
}


/*       S.D.G.       */
