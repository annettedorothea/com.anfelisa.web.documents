'use strict';

class RenderLoginEvent extends AbstractRenderLoginEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
