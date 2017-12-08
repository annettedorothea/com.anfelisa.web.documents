import Event from "../../../gen/ace/Event";

export default class AbstractPasswordsMismatchEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.PasswordsMismatchEvent');
    }
}

/*       S.D.G.       */
