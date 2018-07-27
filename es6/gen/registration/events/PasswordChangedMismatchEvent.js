import Event from "../../../gen/ace/Event";

export default class PasswordChangedMismatchEvent extends Event {
    constructor(eventData) {
        super(eventData, 'registration.PasswordChangedMismatchEvent');
    }
}


/*       S.D.G.       */
