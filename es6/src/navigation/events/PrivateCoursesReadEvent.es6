'use strict';

class PrivateCoursesReadEvent extends AbstractPrivateCoursesReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
