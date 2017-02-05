'use strict';

class PrivateTestReadEvent extends AbstractPrivateTestReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
