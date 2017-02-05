'use strict';

class RenderForgotPasswordEvent extends AbstractRenderForgotPasswordEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
