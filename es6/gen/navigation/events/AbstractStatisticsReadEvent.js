import Event from "../../../gen/ace/Event";

export default class AbstractStatisticsReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.StatisticsReadEvent');
    }
}

/*       S.D.G.       */
