'use strict';

class ShowWantedEvent extends AbstractShowWantedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
