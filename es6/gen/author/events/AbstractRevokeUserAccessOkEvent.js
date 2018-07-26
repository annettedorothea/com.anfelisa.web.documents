import Event from "../../../gen/ace/Event";

export default class AbstractRevokeUserAccessOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.RevokeUserAccessOkEvent');
    }
}


/*       S.D.G.       */
