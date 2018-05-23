import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadWantedImageOfNewCardOkEvent from "../../../src/author/events/LoadWantedImageOfNewCardOkEvent";

export default class AbstractLoadWantedImageOfNewCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.LoadWantedImageOfNewCardCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadWantedImageOfNewCardOkEvent(this.commandData).publish();
			break;
		case this.error:
			break;
		default:
			throw 'LoadWantedImageOfNewCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
