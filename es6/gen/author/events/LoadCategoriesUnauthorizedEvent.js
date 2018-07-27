import Event from "../../../gen/ace/Event";

export default class LoadCategoriesUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.LoadCategoriesUnauthorizedEvent');
    }
}


/*       S.D.G.       */
