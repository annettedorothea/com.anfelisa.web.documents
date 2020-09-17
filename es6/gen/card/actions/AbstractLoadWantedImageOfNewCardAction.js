/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import LoadWantedImageOfNewCardCommand from "../../../src/card/commands/LoadWantedImageOfNewCardCommand";

export default class AbstractLoadWantedImageOfNewCardAction extends Action {

    constructor( image) {
        super({image}, 'card.LoadWantedImageOfNewCardAction');
		}
		
	getCommand() {
		return new LoadWantedImageOfNewCardCommand(this.actionData);
	}


}




/******* S.D.G. *******/



