import Event from "../../../gen/ace/Event";

export default class AbstractSearchDuplicateCardsOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.SearchDuplicateCardsOkEvent');
    }
}


/*       S.D.G.       */
