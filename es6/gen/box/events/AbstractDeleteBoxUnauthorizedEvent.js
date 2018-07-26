import Event from "../../../gen/ace/Event";

export default class AbstractDeleteBoxUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.DeleteBoxUnauthorizedEvent');
    }
}


/*       S.D.G.       */
