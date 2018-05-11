import AppUtils from "../../src/app/AppUtils";

export default class Event {
    constructor(eventParam, eventName) {
        this.eventName = eventName;
        this.eventParam = AppUtils.deepCopy(eventParam);
    }

    prepareDataForView() {
        throw "no prepareDataForView method defined for " + this.eventName;
    }

    getNotifiedListeners() {
        return [];
    }

}

/*       S.D.G.       */


