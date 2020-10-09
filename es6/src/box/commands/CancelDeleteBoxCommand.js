import AbstractCancelDeleteBoxCommand from "../../../gen/box/commands/AbstractCancelDeleteBoxCommand";

export default class CancelDeleteBoxCommand extends AbstractCancelDeleteBoxCommand {
    execute() {
        this.commandData.confirmDelete = false;
        this.commandData.boxId = undefined;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
