import Action from "../../ace/SynchronousAction";
import NameOfEditedCategoryChangedCommand from "../../../src/author/commands/NameOfEditedCategoryChangedCommand";

export default class AbstractNameOfEditedCategoryChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.NameOfEditedCategoryChangedAction', false, false);
    }

	getCommand() {
		return new NameOfEditedCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
