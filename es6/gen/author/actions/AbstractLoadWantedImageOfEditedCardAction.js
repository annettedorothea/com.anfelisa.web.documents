import Action from "../../ace/SynchronousAction";
import LoadWantedImageOfEditedCardCommand from "../../../src/author/commands/LoadWantedImageOfEditedCardCommand";

export default class AbstractLoadWantedImageOfEditedCardAction extends Action {

    constructor() {
        super({}, 'author.LoadWantedImageOfEditedCardAction');
    }

	getCommand() {
		return new LoadWantedImageOfEditedCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
