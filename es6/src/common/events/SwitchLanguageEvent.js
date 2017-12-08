import AbstractSwitchLanguageEvent from "../../../gen/common/events/AbstractSwitchLanguageEvent";

export default class SwitchLanguageEvent extends AbstractSwitchLanguageEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
