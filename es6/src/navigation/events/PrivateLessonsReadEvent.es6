'use strict';

class PrivateLessonsReadEvent extends AbstractPrivateLessonsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
