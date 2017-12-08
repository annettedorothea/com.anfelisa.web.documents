import Event from "../../../gen/ace/Event";

export default class AbstractSaveReinforceCardsEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.SaveReinforceCardsEvent');
    }
}

/*       S.D.G.       */
