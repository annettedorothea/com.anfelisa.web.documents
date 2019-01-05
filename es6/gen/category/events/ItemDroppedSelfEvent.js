import Event from "../../../gen/ace/Event";

export default class ItemDroppedSelfEvent extends Event {
    constructor(eventData) {
        super(eventData, 'category.ItemDroppedSelfEvent');
    }
}


/*       S.D.G.       */
