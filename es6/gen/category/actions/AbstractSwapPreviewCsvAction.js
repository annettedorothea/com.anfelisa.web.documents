/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import SwapPreviewCsvCommand from "../../../src/category/commands/SwapPreviewCsvCommand";

export default class AbstractSwapPreviewCsvAction extends Action {

    constructor() {
        super({}, 'category.SwapPreviewCsvAction');
	}
		
	getCommand() {
		return new SwapPreviewCsvCommand(this.actionData);
	}


}




/******* S.D.G. *******/



