import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleSaveInLocalStorageOkEvent from "../../../src/common/events/ToggleSaveInLocalStorageOkEvent";

export default class AbstractToggleSaveInLocalStorageCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.ToggleSaveInLocalStorageCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleSaveInLocalStorageOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleSaveInLocalStorageCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
