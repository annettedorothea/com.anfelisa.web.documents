import Event from "../../../gen/ace/Event";

export default class AbstractWordIsCorrectAndFinishedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.WordIsCorrectAndFinishedEvent');
    }
}

/*       S.D.G.       */
