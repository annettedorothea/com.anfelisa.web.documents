'use strict';

class TestStartedEvent extends AbstractTestStartedEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
