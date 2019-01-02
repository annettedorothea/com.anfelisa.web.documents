import Action from "../../ace/SynchronousAction";
import CreateCardCommand from "../../../src/author/commands/CreateCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateCardAction extends Action {

    constructor() {
        super({}, 'author.CreateCardAction');
    }
    
	getCommand() {
		return new CreateCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
