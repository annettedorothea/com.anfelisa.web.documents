import Event from "../../../gen/ace/Event";

export default class AbstractShowNextWordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.ShowNextWordEvent');
    }
}

/*       S.D.G.       */
