import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayWantedReinforceAllEvent from "../../../gen/box/events/DisplayWantedReinforceAllEvent";
import DisplayWantedReinforceNotAllEvent from "../../../gen/box/events/DisplayWantedReinforceNotAllEvent";
import DisplayWantedReinforceImageEvent from "../../../gen/box/events/DisplayWantedReinforceImageEvent";

export default class AbstractDisplayWantedReinforceCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.DisplayWantedReinforceCommand");
        this.all = "all";
        this.notAll = "notAll";
        this.image = "image";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.all:
			new DisplayWantedReinforceAllEvent(this.commandData).publish();
			break;
		case this.notAll:
			new DisplayWantedReinforceNotAllEvent(this.commandData).publish();
			break;
		case this.image:
			new DisplayWantedReinforceImageEvent(this.commandData).publish();
			break;
		default:
			throw 'DisplayWantedReinforceCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
