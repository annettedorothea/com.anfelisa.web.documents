import Action from "../../ace/SynchronousAction";
import CancelEditCategoryCommand from "../../../src/category/commands/CancelEditCategoryCommand";

export default class AbstractCancelEditCategoryAction extends Action {

    constructor() {
        super({}, 'category.CancelEditCategoryAction');
    }
    
	getCommand() {
		return new CancelEditCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
