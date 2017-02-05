'use strict';

class RenderResultEvent extends AbstractRenderResultEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
