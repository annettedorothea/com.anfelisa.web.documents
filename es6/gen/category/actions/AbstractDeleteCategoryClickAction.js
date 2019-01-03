import Action from "../../ace/SynchronousAction";
import DeleteCategoryClickCommand from "../../../src/category/commands/DeleteCategoryClickCommand";

export default class AbstractDeleteCategoryClickAction extends Action {

    constructor() {
        super({}, 'category.DeleteCategoryClickAction');
    }
    
	getCommand() {
		return new DeleteCategoryClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
