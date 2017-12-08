'use strict';

class RenderRegistrationEvent extends AbstractRenderRegistrationEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
