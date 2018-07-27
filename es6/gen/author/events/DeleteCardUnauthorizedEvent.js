import Event from "../../../gen/ace/Event";

export default class DeleteCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCardUnauthorizedEvent');
    }
}


/*       S.D.G.       */
