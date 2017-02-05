'use strict';

class PublicTestsReadEvent extends AbstractPublicTestsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
