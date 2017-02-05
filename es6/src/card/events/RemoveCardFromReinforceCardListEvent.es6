'use strict';

class RemoveCardFromReinforceCardListEvent extends AbstractRemoveCardFromReinforceCardListEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
