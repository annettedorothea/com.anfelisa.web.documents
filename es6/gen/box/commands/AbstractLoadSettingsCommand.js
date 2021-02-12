/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import LoadSettingsOkEvent from "../../../gen/box/events/LoadSettingsOkEvent";
import TooManyCardsStatusAction from "../../../src/box/actions/TooManyCardsStatusAction";

export default class AbstractLoadSettingsCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.LoadSettingsCommand");
        this.commandData.boxId = AppState.get_rootContainer_boxSettingsView_boxId();
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new LoadSettingsOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new TooManyCardsStatusAction()).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			AppUtils.httpGet(`${Utils.settings.rootPath}/box/settings/${this.commandData.boxId}`, this.commandData.uuid, true).then((data) => {
				this.commandData.maxCardsPerDay = data.maxCardsPerDay;
				this.commandData.maxInterval = data.maxInterval;
				this.commandData.categoryName = data.categoryName;
				this.commandData.dictionaryLookup = data.dictionaryLookup;
				this.commandData.givenLanguage = data.givenLanguage;
				this.commandData.wantedLanguage = data.wantedLanguage;
				this.commandData.categoryId = data.categoryId;
				this.commandData.allCards = data.allCards;
				this.commandData.allActiveCards = data.allActiveCards;
				this.handleResponse(resolve, reject);
			}, (message) => {
				this.commandData.message = message;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



