import Action from "../../ace/SynchronousAction";
import CancelEditCategoryCommand from "../../../src/author/commands/CancelEditCategoryCommand";

export default class AbstractCancelEditCategoryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.CancelEditCategoryAction', false);
    }

	getCommand() {
		return new CancelEditCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
