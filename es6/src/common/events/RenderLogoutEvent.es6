'use strict';

class RenderLogoutEvent extends AbstractRenderLogoutEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
