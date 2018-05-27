import AbstractEditBoxCommand from "../../../gen/box/commands/AbstractEditBoxCommand";

export default class EditBoxCommand extends AbstractEditBoxCommand {
    execute() {
        this.commandData.boxId = this.commandParam.boxId;
        this.commandData.maxInterval = this.commandParam.maxInterval;
        this.commandData.maxIntervalChecked = this.commandParam.maxIntervalChecked;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
