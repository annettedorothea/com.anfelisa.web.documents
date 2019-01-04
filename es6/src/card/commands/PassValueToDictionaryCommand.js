import AbstractPassValueToDictionaryCommand from "../../../gen/card/commands/AbstractPassValueToDictionaryCommand";
import {getAppState} from "../../app/App";

export default class PassValueToDictionaryCommand extends AbstractPassValueToDictionaryCommand {
    execute() {
        const data = getAppState().data;
        if (!!data.naturalInputOrder) {
            this.commandData.dictionaryValue = data.newCard.given;
        } else {
            this.commandData.dictionaryValue = data.newCard.wanted;
        }
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
