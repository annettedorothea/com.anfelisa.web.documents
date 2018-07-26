import Event from "../../../gen/ace/Event";

export default class AbstractCreateCategoryUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CreateCategoryUnauthorizedEvent');
    }
}


/*       S.D.G.       */
