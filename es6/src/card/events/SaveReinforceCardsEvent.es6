'use strict';

class SaveReinforceCardsEvent extends AbstractSaveReinforceCardsEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
