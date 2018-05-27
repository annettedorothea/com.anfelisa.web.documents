import AbstractCancelDeleteBoxCommand from "../../../gen/box/commands/AbstractCancelDeleteBoxCommand";

export default class CancelDeleteBoxCommand extends AbstractCancelDeleteBoxCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
