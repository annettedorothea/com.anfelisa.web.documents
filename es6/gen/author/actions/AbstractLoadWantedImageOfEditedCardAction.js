import Action from "../../ace/SynchronousAction";
import LoadWantedImageOfEditedCardCommand from "../../../src/author/commands/LoadWantedImageOfEditedCardCommand";

export default class AbstractLoadWantedImageOfEditedCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.LoadWantedImageOfEditedCardAction', false);
    }

	getCommand() {
		return new LoadWantedImageOfEditedCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
