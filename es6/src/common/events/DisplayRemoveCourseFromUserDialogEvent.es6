'use strict';

class DisplayRemoveCourseFromUserDialogEvent extends AbstractDisplayRemoveCourseFromUserDialogEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
