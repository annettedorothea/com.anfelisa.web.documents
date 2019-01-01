import Action from "../../ace/SynchronousAction";
import LoadNextCardCommand from "../../../src/box/commands/LoadNextCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadNextCardAction extends Action {

    constructor() {
        super({}, 'box.LoadNextCardAction');
    }

	getCommand() {
		return new LoadNextCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
