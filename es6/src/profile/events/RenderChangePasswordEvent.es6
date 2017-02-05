'use strict';

class RenderChangePasswordEvent extends AbstractRenderChangePasswordEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
