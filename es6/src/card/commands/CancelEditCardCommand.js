import AbstractCancelEditCardCommand from "../../../gen/card/commands/AbstractCancelEditCardCommand";

export default class CancelEditCardCommand extends AbstractCancelEditCardCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */