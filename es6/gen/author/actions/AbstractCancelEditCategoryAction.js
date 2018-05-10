import Action from "../../ace/SynchronousAction";
import CancelEditCategoryCommand from "../../../src/author/commands/CancelEditCategoryCommand";

export default class AbstractCancelEditCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CancelEditCategoryAction', false);
    }

	getCommand() {
		return new CancelEditCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
