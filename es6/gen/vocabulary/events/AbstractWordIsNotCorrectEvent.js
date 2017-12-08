import Event from "../../../gen/ace/Event";

export default class AbstractWordIsNotCorrectEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.WordIsNotCorrectEvent');
    }
}

/*       S.D.G.       */
