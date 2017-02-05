'use strict';

class PublicLessonsReadEvent extends AbstractPublicLessonsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
