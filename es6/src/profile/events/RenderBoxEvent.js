'use strict';

class RenderBoxEvent extends AbstractRenderBoxEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
