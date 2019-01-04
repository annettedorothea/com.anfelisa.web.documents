import Event from "../../../gen/ace/Event";

export default class DeleteCardErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'card.DeleteCardErrorEvent');
    }
}


/*       S.D.G.       */
