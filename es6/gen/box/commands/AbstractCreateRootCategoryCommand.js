/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractAsynchronousCommand from "../../../gen/ace/AbstractAsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractCreateRootCategoryCommand extends AbstractAsynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.CreateRootCategoryCommand");
        this.ok = "ok";
        this.commandData.maxInterval = AppState.get_boxSettingsView_maxInterval();
        this.commandData.maxCardsPerDay = AppState.get_boxSettingsView_maxCardsPerDay();
        this.commandData.categoryId = AppState.get_boxSettingsView_categoryId();
        this.commandData.categoryName = AppState.get_boxSettingsView_categoryName();
        this.commandData.dictionaryLookup = AppState.get_boxSettingsView_dictionaryLookup();
        this.commandData.givenLanguage = AppState.get_boxSettingsView_givenLanguage();
        this.commandData.wantedLanguage = AppState.get_boxSettingsView_wantedLanguage();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new RouteAction(this.commandData.hash)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateRootCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		categoryName : this.commandData.categoryName,
	    		dictionaryLookup : this.commandData.dictionaryLookup,
	    		givenLanguage : this.commandData.givenLanguage,
	    		wantedLanguage : this.commandData.wantedLanguage,
	    		maxCardsPerDay : this.commandData.maxCardsPerDay,
	    		maxInterval : this.commandData.maxInterval
	    	};
	
			this.doHttpPost(`/${Utils.getRootPath()}/box/create`, true, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



