import AbstractStatisticsReadEvent from "../../../gen/navigation/events/AbstractStatisticsReadEvent";

export default class StatisticsReadEvent extends AbstractStatisticsReadEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
