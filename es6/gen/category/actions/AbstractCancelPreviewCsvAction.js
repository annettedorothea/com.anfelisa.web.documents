/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelPreviewCsvCommand from "../../../src/category/commands/CancelPreviewCsvCommand";

export default class AbstractCancelPreviewCsvAction extends Action {

    constructor() {
        super({}, 'category.CancelPreviewCsvAction');
	}
		
	getCommand() {
		return new CancelPreviewCsvCommand(this.actionData);
	}


}




/******* S.D.G. *******/



