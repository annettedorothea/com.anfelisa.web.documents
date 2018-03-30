import AbstractCheckIfComplexCardIsFinishedComplexCardIsFinishedEvent from "../../../gen/card/events/AbstractCheckIfComplexCardIsFinishedComplexCardIsFinishedEvent";
import AppUtils from "../../app/AppUtils";

export default class CheckIfComplexCardIsFinishedComplexCardIsFinishedEvent extends AbstractCheckIfComplexCardIsFinishedComplexCardIsFinishedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
