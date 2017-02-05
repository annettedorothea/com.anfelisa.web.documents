'use strict';

class UpdateHashEvent extends AbstractUpdateHashEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
