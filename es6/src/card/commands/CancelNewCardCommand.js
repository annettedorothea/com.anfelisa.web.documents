import AbstractCancelNewCardCommand from "../../../gen/card/commands/AbstractCancelNewCardCommand";

export default class CancelNewCardCommand extends AbstractCancelNewCardCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
