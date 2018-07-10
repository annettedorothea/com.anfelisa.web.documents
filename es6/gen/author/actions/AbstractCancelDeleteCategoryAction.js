import Action from "../../ace/SynchronousAction";
import CancelDeleteCategoryCommand from "../../../src/author/commands/CancelDeleteCategoryCommand";

export default class AbstractCancelDeleteCategoryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.CancelDeleteCategoryAction', false, false);
    }

	getCommand() {
		return new CancelDeleteCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
