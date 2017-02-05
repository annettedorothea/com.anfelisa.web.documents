'use strict';

class RenderNewPasswordEvent extends AbstractRenderNewPasswordEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
