'use strict';

class KeepCardInReinforceCardListEvent extends AbstractKeepCardInReinforceCardListEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
