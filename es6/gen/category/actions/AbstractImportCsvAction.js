/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ImportCsvCommand from "../../../src/category/commands/ImportCsvCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractImportCsvAction extends Action {

    constructor() {
        super({}, 'category.ImportCsvAction');
		this.postCall = this.postCall.bind(this);
		}
		
	getCommand() {
		return new ImportCsvCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



