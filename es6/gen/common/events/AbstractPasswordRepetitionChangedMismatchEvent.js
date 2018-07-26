import Event from "../../../gen/ace/Event";

export default class AbstractPasswordRepetitionChangedMismatchEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.PasswordRepetitionChangedMismatchEvent');
    }
}


/*       S.D.G.       */
