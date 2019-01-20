import AbstractPassValueToDictionaryCommand from "../../../gen/card/commands/AbstractPassValueToDictionaryCommand";
import {getState} from "../../../gen/ace/AppState";

export default class PassValueToDictionaryCommand extends AbstractPassValueToDictionaryCommand {
    execute() {
        const data = getState().data.cardView;
        if (!!data.naturalInputOrder) {
            this.commandData.dictionaryValue = data.newCard.given;
        } else {
            this.commandData.dictionaryValue = data.newCard.wanted;
        }
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
