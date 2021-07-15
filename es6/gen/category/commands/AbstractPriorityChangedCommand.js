/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import TriggerAction from "../../ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractPriorityChangedCommand extends SynchronousCommand {
    constructor() {
        super("category.PriorityChangedCommand");
    }

    initCommandData(data) {
        data.selectedCategoryId = AppState.get_rootContainer_authorView_categoryTree_selectedCategory_categoryId();
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.PriorityChangedOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
			new TriggerAction().publish(
				new ReloadCategoryTreeAction(), 
					{
						selectedCategoryId: data.selectedCategoryId, 
						categoryIdToBeExpanded: data.categoryIdToBeExpanded
					}
			)
		}
    }
}




/******* S.D.G. *******/



