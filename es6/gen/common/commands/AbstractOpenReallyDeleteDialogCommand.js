import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayRemoveCourseFromUserDialogEvent from "../../../src/common/events/DisplayRemoveCourseFromUserDialogEvent";
import DisplayDeleteBoxDialogEvent from "../../../src/common/events/DisplayDeleteBoxDialogEvent";
import DisplayRemoveCardFromBoxDialogEvent from "../../../src/common/events/DisplayRemoveCardFromBoxDialogEvent";

export default class AbstractOpenReallyDeleteDialogCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.OpenReallyDeleteDialogCommand");
        this.removeCourseFromUser = "removeCourseFromUser";
        this.deleteBox = "deleteBox";
        this.removedCard = "removedCard";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.removeCourseFromUser:
        	promises.push(new DisplayRemoveCourseFromUserDialogEvent(this.commandData).publish());
        	break;
        case this.deleteBox:
        	promises.push(new DisplayDeleteBoxDialogEvent(this.commandData).publish());
        	break;
        case this.removedCard:
        	promises.push(new DisplayRemoveCardFromBoxDialogEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
