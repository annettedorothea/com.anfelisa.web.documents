import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayWantedOkEvent from "../../../gen/box/events/DisplayWantedOkEvent";

export default class AbstractDisplayWantedCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.DisplayWantedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DisplayWantedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DisplayWantedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
