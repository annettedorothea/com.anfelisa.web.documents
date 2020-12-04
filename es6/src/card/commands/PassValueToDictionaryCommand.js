import AbstractPassValueToDictionaryCommand from "../../../gen/card/commands/AbstractPassValueToDictionaryCommand";

export default class PassValueToDictionaryCommand extends AbstractPassValueToDictionaryCommand {
    execute() {
        if (!!this.commandData.naturalInputOrder) {
            this.commandData.dictionaryValue = this.commandData.given;
        } else {
            this.commandData.dictionaryValue = this.commandData.wanted;
        }
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
