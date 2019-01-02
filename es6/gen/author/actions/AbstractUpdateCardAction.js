import Action from "../../ace/SynchronousAction";
import UpdateCardCommand from "../../../src/author/commands/UpdateCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateCardAction extends Action {

    constructor() {
        super({}, 'author.UpdateCardAction');
    }
    
	getCommand() {
		return new UpdateCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
