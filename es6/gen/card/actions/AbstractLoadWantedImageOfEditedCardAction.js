import Action from "../../ace/SynchronousAction";
import LoadWantedImageOfEditedCardCommand from "../../../src/card/commands/LoadWantedImageOfEditedCardCommand";

export default class AbstractLoadWantedImageOfEditedCardAction extends Action {

    constructor( image) {
        super({image}, 'card.LoadWantedImageOfEditedCardAction');
    }
    
	getCommand() {
		return new LoadWantedImageOfEditedCardCommand(this.actionData);
	}


}

/*       S.D.G.       */