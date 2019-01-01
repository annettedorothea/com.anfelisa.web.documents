import Action from "../../ace/SynchronousAction";
import DeleteBoxCommand from "../../../src/box/commands/DeleteBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteBoxAction extends Action {

    constructor() {
        super({}, 'box.DeleteBoxAction');
    }

	getCommand() {
		return new DeleteBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
