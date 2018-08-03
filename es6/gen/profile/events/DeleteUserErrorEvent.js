import Event from "../../../gen/ace/Event";

export default class DeleteUserErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'profile.DeleteUserErrorEvent');
    }
}


/*       S.D.G.       */
