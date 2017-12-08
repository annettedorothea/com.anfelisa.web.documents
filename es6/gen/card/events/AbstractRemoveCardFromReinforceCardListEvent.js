import Event from "../../../gen/ace/Event";

export default class AbstractRemoveCardFromReinforceCardListEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'card.RemoveCardFromReinforceCardListEvent');
    }
}

/*       S.D.G.       */
