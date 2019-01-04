import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadWantedImageOfNewCardOkEvent from "../../../gen/card/events/LoadWantedImageOfNewCardOkEvent";

export default class AbstractLoadWantedImageOfNewCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.LoadWantedImageOfNewCardCommand");
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
