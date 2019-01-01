import Action from "../../ace/SynchronousAction";
import DeleteCardCommand from "../../../src/author/commands/DeleteCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteCardAction extends Action {

    constructor() {
        super({}, 'author.DeleteCardAction');
    }

	getCommand() {
		return new DeleteCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
