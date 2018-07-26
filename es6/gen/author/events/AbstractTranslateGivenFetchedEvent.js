import Event from "../../../gen/ace/Event";

export default class AbstractTranslateGivenFetchedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.TranslateGivenFetchedEvent');
    }
}


/*       S.D.G.       */
