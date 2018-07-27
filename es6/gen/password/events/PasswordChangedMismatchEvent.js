import Event from "../../../gen/ace/Event";

export default class PasswordChangedMismatchEvent extends Event {
    constructor(eventData) {
        super(eventData, 'password.PasswordChangedMismatchEvent');
    }
}


/*       S.D.G.       */
