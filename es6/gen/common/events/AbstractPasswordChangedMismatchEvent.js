import Event from "../../../gen/ace/Event";

export default class AbstractPasswordChangedMismatchEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.PasswordChangedMismatchEvent');
    }
}


/*       S.D.G.       */
