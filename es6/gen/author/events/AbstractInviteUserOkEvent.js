import Event from "../../../gen/ace/Event";

export default class AbstractInviteUserOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.InviteUserOkEvent');
    }
}


/*       S.D.G.       */
