'use strict';

class PrivateTestsReadEvent extends AbstractPrivateTestsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
