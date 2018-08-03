import Event from "../../../gen/ace/Event";

export default class DeleteUserErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'admin.DeleteUserErrorEvent');
    }
}


/*       S.D.G.       */
