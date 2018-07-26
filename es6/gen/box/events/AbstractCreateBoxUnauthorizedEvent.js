import Event from "../../../gen/ace/Event";

export default class AbstractCreateBoxUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.CreateBoxUnauthorizedEvent');
    }
}


/*       S.D.G.       */
