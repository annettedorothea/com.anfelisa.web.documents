import AbstractDeleteBoxClickCommand from "../../../gen/box/commands/AbstractDeleteBoxClickCommand";

export default class DeleteBoxClickCommand extends AbstractDeleteBoxClickCommand {
    execute() {
        this.commandData.boxId = this.commandParam.boxId;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
