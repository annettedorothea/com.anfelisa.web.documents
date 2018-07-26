import Event from "../../../gen/ace/Event";

export default class AbstractSearchDuplicateCardsUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.SearchDuplicateCardsUnauthorizedEvent');
    }
}


/*       S.D.G.       */
