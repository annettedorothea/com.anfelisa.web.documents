import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayWantedAllEvent from "../../../src/box/events/DisplayWantedAllEvent";
import DisplayWantedNotAllEvent from "../../../src/box/events/DisplayWantedNotAllEvent";
import DisplayWantedImageEvent from "../../../src/box/events/DisplayWantedImageEvent";

export default class AbstractDisplayWantedCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.DisplayWantedCommand");
        this.all = "all";
        this.notAll = "notAll";
        this.image = "image";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.all:
			new DisplayWantedAllEvent(this.commandData).publish();
			break;
		case this.notAll:
			new DisplayWantedNotAllEvent(this.commandData).publish();
			break;
		case this.image:
			new DisplayWantedImageEvent(this.commandData).publish();
			break;
		default:
			throw 'DisplayWantedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
