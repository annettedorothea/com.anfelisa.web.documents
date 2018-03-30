import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import OpenReallyDeleteDialogRemoveCourseFromUserEvent from "../../../src/common/events/OpenReallyDeleteDialogRemoveCourseFromUserEvent";
import OpenReallyDeleteDialogDeleteBoxEvent from "../../../src/common/events/OpenReallyDeleteDialogDeleteBoxEvent";
import OpenReallyDeleteDialogRemovedCardEvent from "../../../src/common/events/OpenReallyDeleteDialogRemovedCardEvent";

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
			promises.push(new OpenReallyDeleteDialogRemoveCourseFromUserEvent(this.commandData).publish());
			break;
		case this.deleteBox:
			promises.push(new OpenReallyDeleteDialogDeleteBoxEvent(this.commandData).publish());
			break;
		case this.removedCard:
			promises.push(new OpenReallyDeleteDialogRemovedCardEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('OpenReallyDeleteDialogCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
