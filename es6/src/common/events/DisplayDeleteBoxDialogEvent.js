import AbstractDisplayDeleteBoxDialogEvent from "../../../gen/common/events/AbstractDisplayDeleteBoxDialogEvent";

export default class DisplayDeleteBoxDialogEvent extends AbstractDisplayDeleteBoxDialogEvent {
    prepareDataForView() {
        this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
