'use strict';

class DisplayNextReinforceCardEvent extends AbstractDisplayNextReinforceCardEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
