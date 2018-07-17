import AbstractClearToastCommand from "../../../gen/common/commands/AbstractClearToastCommand";

export default class ClearToastCommand extends AbstractClearToastCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
