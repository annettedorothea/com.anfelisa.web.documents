import Event from "../../../gen/ace/Event";

export default class AbstractEditCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.EditCardOkEvent');
    }
}


/*       S.D.G.       */
