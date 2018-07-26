import Event from "../../../gen/ace/Event";

export default class AbstractPasswordRepetitionChangedMatchEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.PasswordRepetitionChangedMatchEvent');
    }
}


/*       S.D.G.       */
