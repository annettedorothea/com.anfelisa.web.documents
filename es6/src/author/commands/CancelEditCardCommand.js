import AbstractCancelEditCardCommand from "../../../gen/author/commands/AbstractCancelEditCardCommand";

export default class CancelEditCardCommand extends AbstractCancelEditCardCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
