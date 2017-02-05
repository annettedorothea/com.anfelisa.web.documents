'use strict';

class PublicTestReadEvent extends AbstractPublicTestReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
