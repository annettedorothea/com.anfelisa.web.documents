import Event from "../../../gen/ace/Event";

export default class RevokeUserAccessUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.RevokeUserAccessUnauthorizedEvent');
    }
}


/*       S.D.G.       */
