import Action from "../../ace/SynchronousAction";
import DeleteCategoryCommand from "../../../src/author/commands/DeleteCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteCategoryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.DeleteCategoryAction');
    }

	getCommand() {
		return new DeleteCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
