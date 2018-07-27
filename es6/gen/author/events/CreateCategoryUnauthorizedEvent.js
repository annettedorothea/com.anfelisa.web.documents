import Event from "../../../gen/ace/Event";

export default class CreateCategoryUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.CreateCategoryUnauthorizedEvent');
    }
}


/*       S.D.G.       */
