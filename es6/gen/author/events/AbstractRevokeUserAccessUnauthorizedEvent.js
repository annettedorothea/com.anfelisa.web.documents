import Event from "../../../gen/ace/Event";

export default class AbstractRevokeUserAccessUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.RevokeUserAccessUnauthorizedEvent');
    }
}


/*       S.D.G.       */
