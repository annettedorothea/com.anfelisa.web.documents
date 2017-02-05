'use strict';

class StatisticsReadEvent extends AbstractStatisticsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
    }
}

/*       S.D.G.       */
