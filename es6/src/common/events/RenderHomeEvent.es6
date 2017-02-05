'use strict';

class RenderHomeEvent extends AbstractRenderHomeEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
