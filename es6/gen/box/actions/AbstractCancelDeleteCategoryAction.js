import Action from "../../ace/SynchronousAction";
import CancelDeleteCategoryCommand from "../../../src/box/commands/CancelDeleteCategoryCommand";

export default class AbstractCancelDeleteCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.CancelDeleteCategoryAction', false);
    }

	getCommand() {
		return new CancelDeleteCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
