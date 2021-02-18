/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractScheduleSelectedCardsCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.ScheduleSelectedCardsCommand");
        this.commandData.cardIds = AppState.get_rootContainer_authorView_cardView_selectedCardIds();
        this.commandData.boxId = AppState.get_rootContainer_authorView_boxId();
        this.commandData.filterNonScheduled = AppState.get_rootContainer_authorView_filterNonScheduled();
        this.commandData.outcomes = [];
    }

	addNoFilterOutcome() {
		this.commandData.outcomes.push("noFilter");
	}
	addFilterOutcome() {
		this.commandData.outcomes.push("filter");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("noFilter")) {
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
		}
		if (this.commandData.outcomes.includes("filter")) {
			promises.push(new TriggerAction(new ReloadCategoryTreeAction(this.commandData.selectedCategoryId, this.commandData.categoryIdToBeExpanded)).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		cardIds : this.commandData.cardIds,
	    		boxId : this.commandData.boxId
	    	};
	
			AppUtils.httpPost(`${Utils.settings.rootPath}/cards/schedule`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (message) => {
				this.commandData.message = message;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



