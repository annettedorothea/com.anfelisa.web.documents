import AbstractDeleteCardClickCommand from "../../../gen/card/commands/AbstractDeleteCardClickCommand";

export default class DeleteCardClickCommand extends AbstractDeleteCardClickCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
