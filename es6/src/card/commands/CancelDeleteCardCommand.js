import AbstractCancelDeleteCardCommand from "../../../gen/card/commands/AbstractCancelDeleteCardCommand";

export default class CancelDeleteCardCommand extends AbstractCancelDeleteCardCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
