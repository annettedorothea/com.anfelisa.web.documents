import Action from "../../ace/SynchronousAction";
import CategorySelectedCommand from "../../../src/box/commands/CategorySelectedCommand";

export default class AbstractCategorySelectedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.CategorySelectedAction', false);
    }

	getCommand() {
		return new CategorySelectedCommand(this.actionData);
	}


}

/*       S.D.G.       */
