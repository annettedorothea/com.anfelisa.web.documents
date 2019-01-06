import Action from "../../ace/SynchronousAction";
import DeleteCardClickCommand from "../../../src/card/commands/DeleteCardClickCommand";

export default class AbstractDeleteCardClickAction extends Action {

    constructor( cardId) {
        super({cardId}, 'card.DeleteCardClickAction');
    }
    
	getCommand() {
		return new DeleteCardClickCommand(this.actionData);
	}


}

/*       S.D.G.       */