import Event from "../../../gen/ace/Event";

export default class AbstractShowNextWordOfTestEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.ShowNextWordOfTestEvent');
    }
}

/*       S.D.G.       */
