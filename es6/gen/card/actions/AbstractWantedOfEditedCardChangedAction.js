import Action from "../../ace/SynchronousAction";
import WantedOfEditedCardChangedCommand from "../../../src/card/commands/WantedOfEditedCardChangedCommand";

export default class AbstractWantedOfEditedCardChangedAction extends Action {

    constructor( wanted) {
        super({wanted}, 'card.WantedOfEditedCardChangedAction');
    }
    
	getCommand() {
		return new WantedOfEditedCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */