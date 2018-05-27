import AbstractEditBoxCommand from "../../../gen/box/commands/AbstractEditBoxCommand";

export default class EditBoxCommand extends AbstractEditBoxCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
