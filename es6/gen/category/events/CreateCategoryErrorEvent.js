import Event from "../../../gen/ace/Event";

export default class CreateCategoryErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'category.CreateCategoryErrorEvent');
    }
}


/*       S.D.G.       */