import Action from "../../ace/SynchronousAction";
import CancelNewCategoryCommand from "../../../src/author/commands/CancelNewCategoryCommand";

export default class AbstractCancelNewCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CancelNewCategoryAction', false);
    }

	getCommand() {
		return new CancelNewCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
