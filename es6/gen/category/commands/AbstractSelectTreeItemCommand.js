/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import SelectTreeItemOkEvent from "../../../gen/category/events/SelectTreeItemOkEvent";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractSelectTreeItemCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.SelectTreeItemCommand");
        this.commandData.outcomes = [];
        this.commandData.rootCategory = AppState.get_authorView_categoryTree_rootCategory();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new SelectTreeItemOkEvent(this.commandData).publish();
			new TriggerAction(new LoadCardsAction()).publish();
		}
    }
}




/******* S.D.G. *******/



