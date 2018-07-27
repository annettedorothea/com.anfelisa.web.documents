import Event from "../../../gen/ace/Event";

export default class DeleteCategoryUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.DeleteCategoryUnauthorizedEvent');
    }
}


/*       S.D.G.       */
