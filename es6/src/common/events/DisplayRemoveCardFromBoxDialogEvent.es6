'use strict';

class DisplayRemoveCardFromBoxDialogEvent extends AbstractDisplayRemoveCardFromBoxDialogEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
