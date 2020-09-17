/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractAsynchronousCommand from "../../../gen/ace/AbstractAsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import LoadSettingsOkEvent from "../../../gen/box/events/LoadSettingsOkEvent";

export default class AbstractLoadSettingsCommand extends AbstractAsynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.LoadSettingsCommand");
        this.ok = "ok";
        this.commandData.boxId = AppState.get_boxSettingsView_boxId();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadSettingsOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadSettingsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			this.doHttpGet(`/${Utils.getRootPath()}/box/settings/${this.commandData.boxId}`, true).then((data) => {
				this.commandData.maxCardsPerDay = data.maxCardsPerDay;
				this.commandData.maxInterval = data.maxInterval;
				this.commandData.categoryName = data.categoryName;
				this.commandData.dictionaryLookup = data.dictionaryLookup;
				this.commandData.givenLanguage = data.givenLanguage;
				this.commandData.wantedLanguage = data.wantedLanguage;
				this.commandData.categoryId = data.categoryId;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



