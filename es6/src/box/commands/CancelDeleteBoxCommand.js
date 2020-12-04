import AbstractCancelDeleteBoxCommand from "../../../gen/box/commands/AbstractCancelDeleteBoxCommand";

export default class CancelDeleteBoxCommand extends AbstractCancelDeleteBoxCommand {
    execute() {
        this.commandData.confirmDelete = false;
        this.commandData.boxId = undefined;
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
