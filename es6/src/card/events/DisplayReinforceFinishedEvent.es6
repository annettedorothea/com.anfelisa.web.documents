'use strict';

class DisplayReinforceFinishedEvent extends AbstractDisplayReinforceFinishedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
