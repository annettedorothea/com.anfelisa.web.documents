import Action from "../../ace/SynchronousAction";
import CategorySelectedCommand from "../../../src/box/commands/CategorySelectedCommand";

export default class AbstractCategorySelectedAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.CategorySelectedAction', false);
    }

	getCommand() {
		return new CategorySelectedCommand(this.actionData);
	}


}

/*       S.D.G.       */
