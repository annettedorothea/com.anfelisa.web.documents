import Event from "../../../gen/ace/Event";

export default class AbstractLoadCategoriesUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.LoadCategoriesUnauthorizedEvent');
    }
}


/*       S.D.G.       */
