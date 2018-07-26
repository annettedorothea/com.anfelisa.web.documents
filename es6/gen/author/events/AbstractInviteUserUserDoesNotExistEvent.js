import Event from "../../../gen/ace/Event";

export default class AbstractInviteUserUserDoesNotExistEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.InviteUserUserDoesNotExistEvent');
    }
}


/*       S.D.G.       */
