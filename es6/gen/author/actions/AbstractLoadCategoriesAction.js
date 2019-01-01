import Action from "../../ace/SynchronousAction";
import LoadCategoriesCommand from "../../../src/author/commands/LoadCategoriesCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadCategoriesAction extends Action {

    constructor() {
        super({}, 'author.LoadCategoriesAction');
    }

	getCommand() {
		return new LoadCategoriesCommand(this.actionData);
	}


}

/*       S.D.G.       */
