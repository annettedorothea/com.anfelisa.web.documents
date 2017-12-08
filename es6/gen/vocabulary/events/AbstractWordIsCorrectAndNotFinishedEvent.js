import Event from "../../../gen/ace/Event";

export default class AbstractWordIsCorrectAndNotFinishedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.WordIsCorrectAndNotFinishedEvent');
    }
}

/*       S.D.G.       */
