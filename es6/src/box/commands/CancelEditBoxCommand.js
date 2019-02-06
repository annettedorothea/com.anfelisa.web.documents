import AbstractCancelEditBoxCommand from "../../../gen/box/commands/AbstractCancelEditBoxCommand";

export default class CancelEditBoxCommand extends AbstractCancelEditBoxCommand {
    execute() {
        this.commandData.editedMaxInterval = null;
        this.commandData.editMaxInterval = false;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
