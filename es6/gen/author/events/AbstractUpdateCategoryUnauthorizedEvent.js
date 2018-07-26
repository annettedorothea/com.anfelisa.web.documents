import Event from "../../../gen/ace/Event";

export default class AbstractUpdateCategoryUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.UpdateCategoryUnauthorizedEvent');
    }
}


/*       S.D.G.       */
