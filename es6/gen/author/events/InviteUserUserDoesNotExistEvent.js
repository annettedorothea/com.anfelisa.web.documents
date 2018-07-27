import Event from "../../../gen/ace/Event";

export default class InviteUserUserDoesNotExistEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.InviteUserUserDoesNotExistEvent');
    }
}


/*       S.D.G.       */
