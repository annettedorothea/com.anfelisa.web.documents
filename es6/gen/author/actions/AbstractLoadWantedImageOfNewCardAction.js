import Action from "../../ace/SynchronousAction";
import LoadWantedImageOfNewCardCommand from "../../../src/author/commands/LoadWantedImageOfNewCardCommand";

export default class AbstractLoadWantedImageOfNewCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.LoadWantedImageOfNewCardAction', false);
    }

	getCommand() {
		return new LoadWantedImageOfNewCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
