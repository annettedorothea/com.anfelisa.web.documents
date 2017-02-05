'use strict';

class PublicCoursesReadEvent extends AbstractPublicCoursesReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
