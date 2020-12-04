/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import SwapPreviewCsvOkEvent from "../../../gen/category/events/SwapPreviewCsvOkEvent";

export default class AbstractSwapPreviewCsvCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.SwapPreviewCsvCommand");
        this.commandData.outcomes = [];
        this.commandData.previewCsv = AppState.get_authorView_categoryTree_previewCsv();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new SwapPreviewCsvOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



