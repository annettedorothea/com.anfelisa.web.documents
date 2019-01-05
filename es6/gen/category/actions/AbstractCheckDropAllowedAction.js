import Action from "../../ace/SynchronousAction";
import CheckDropAllowedCommand from "../../../src/category/commands/CheckDropAllowedCommand";

export default class AbstractCheckDropAllowedAction extends Action {

    constructor( categoryId) {
        super({categoryId}, 'category.CheckDropAllowedAction');
    }
    
	getCommand() {
		return new CheckDropAllowedCommand(this.actionData);
	}


}

/*       S.D.G.       */
