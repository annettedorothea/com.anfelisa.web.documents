import AbstractFilterCardsCommand from "../../../gen/card/commands/AbstractFilterCardsCommand";

export default class FilterCardsCommand extends AbstractFilterCardsCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
