import Action from "../../ace/SynchronousAction";
import PostponeCardsOfBoxCommand from "../../../src/box/commands/PostponeCardsOfBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractPostponeCardsOfBoxAction extends Action {

    constructor() {
        super({}, 'box.PostponeCardsOfBoxAction');
    }

	getCommand() {
		return new PostponeCardsOfBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
