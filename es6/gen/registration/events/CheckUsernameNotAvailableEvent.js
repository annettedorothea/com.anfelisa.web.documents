import Event from "../../../gen/ace/Event";

export default class CheckUsernameNotAvailableEvent extends Event {
    constructor(eventData) {
        super(eventData, 'registration.CheckUsernameNotAvailableEvent');
    }
}


/*       S.D.G.       */
