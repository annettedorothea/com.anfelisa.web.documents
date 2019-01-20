import AbstractDeleteBoxClickCommand from "../../../gen/box/commands/AbstractDeleteBoxClickCommand";

export default class DeleteBoxClickCommand extends AbstractDeleteBoxClickCommand {
    execute() {
        this.commandData.outcome = this.ok;
        this.commandData.deleteBox = {
            confirmDelete: true,
            boxId: this.commandData.boxId
        };
    }
}

/*       S.D.G.       */
