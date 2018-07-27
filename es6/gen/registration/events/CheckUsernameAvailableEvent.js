import Event from "../../../gen/ace/Event";

export default class CheckUsernameAvailableEvent extends Event {
    constructor(eventData) {
        super(eventData, 'registration.CheckUsernameAvailableEvent');
    }
}


/*       S.D.G.       */
