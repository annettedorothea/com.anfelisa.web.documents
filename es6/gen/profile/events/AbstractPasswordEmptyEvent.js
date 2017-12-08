import Event from "../../../gen/ace/Event";

export default class AbstractPasswordEmptyEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.PasswordEmptyEvent');
    }
}

/*       S.D.G.       */
