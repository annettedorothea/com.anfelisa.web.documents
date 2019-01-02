import Action from "../../ace/SynchronousAction";
import UpdateCategoryCommand from "../../../src/author/commands/UpdateCategoryCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateCategoryAction extends Action {

    constructor() {
        super({}, 'author.UpdateCategoryAction');
    }
    
	getCommand() {
		return new UpdateCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
