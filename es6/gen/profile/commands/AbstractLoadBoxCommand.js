import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadBoxLoadedEvent from "../../../src/profile/events/LoadBoxLoadedEvent";
import LoadBoxErrorEvent from "../../../src/profile/events/LoadBoxErrorEvent";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractLoadBoxCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.LoadBoxCommand");
        this.loaded = "loaded";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];

		switch (this.commandData.outcome) {
		case this.loaded:
			promises.push(new LoadBoxLoadedEvent(this.commandData).publish());
			break;
		case this.error:
			promises.push(new LoadBoxErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
