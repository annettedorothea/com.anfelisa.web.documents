import Event from "../../../gen/ace/Event";

export default class AbstractDeleteCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCardUnauthorizedEvent');
    }
}


/*       S.D.G.       */
