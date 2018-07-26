import Event from "../../../gen/ace/Event";

export default class AbstractDeleteCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCardOkEvent');
    }
}


/*       S.D.G.       */
