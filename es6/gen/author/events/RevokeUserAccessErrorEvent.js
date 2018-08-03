import Event from "../../../gen/ace/Event";

export default class RevokeUserAccessErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.RevokeUserAccessErrorEvent');
    }
}


/*       S.D.G.       */
