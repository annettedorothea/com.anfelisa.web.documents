'use strict';

class DisplayNextWordButtonEvent extends AbstractDisplayNextWordButtonEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
