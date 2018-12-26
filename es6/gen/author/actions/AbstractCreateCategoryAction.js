import Action from "../../ace/SynchronousAction";
import CreateCategoryCommand from "../../../src/author/commands/CreateCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateCategoryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.CreateCategoryAction');
    }

	getCommand() {
		return new CreateCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
