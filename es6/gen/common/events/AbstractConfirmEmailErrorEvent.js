import Event from "../../../gen/ace/Event";

export default class AbstractConfirmEmailErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.ConfirmEmailErrorEvent');
    }
}


/*       S.D.G.       */
