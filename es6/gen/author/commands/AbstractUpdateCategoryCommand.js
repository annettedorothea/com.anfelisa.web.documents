import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateCategoryOkEvent from "../../../src/author/events/UpdateCategoryOkEvent";
import UpdateCategoryUnauthorizedEvent from "../../../src/author/events/UpdateCategoryUnauthorizedEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractUpdateCategoryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.UpdateCategoryCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new UpdateCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new UpdateCategoryUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
