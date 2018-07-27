import Event from "../../../gen/ace/Event";

export default class InviteUserUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.InviteUserUnauthorizedEvent');
    }
}


/*       S.D.G.       */
