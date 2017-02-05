'use strict';

class ServerErrorEvent extends AbstractServerErrorEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
