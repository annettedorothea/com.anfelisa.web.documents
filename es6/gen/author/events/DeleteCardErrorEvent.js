import Event from "../../../gen/ace/Event";

export default class DeleteCardErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCardErrorEvent');
    }
}


/*       S.D.G.       */
