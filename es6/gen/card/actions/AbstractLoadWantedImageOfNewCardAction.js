import Action from "../../ace/SynchronousAction";
import LoadWantedImageOfNewCardCommand from "../../../src/card/commands/LoadWantedImageOfNewCardCommand";

export default class AbstractLoadWantedImageOfNewCardAction extends Action {

    constructor() {
        super({}, 'card.LoadWantedImageOfNewCardAction');
    }
    
	getCommand() {
		return new LoadWantedImageOfNewCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
