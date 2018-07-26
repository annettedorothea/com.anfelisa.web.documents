import Event from "../../../gen/ace/Event";

export default class AbstractScoreCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.ScoreCardUnauthorizedEvent');
    }
}


/*       S.D.G.       */
