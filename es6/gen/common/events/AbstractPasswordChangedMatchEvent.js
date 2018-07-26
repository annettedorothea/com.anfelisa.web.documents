import Event from "../../../gen/ace/Event";

export default class AbstractPasswordChangedMatchEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.PasswordChangedMatchEvent');
    }
}


/*       S.D.G.       */
