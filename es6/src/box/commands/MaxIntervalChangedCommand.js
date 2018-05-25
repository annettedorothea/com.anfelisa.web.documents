import AbstractMaxIntervalChangedCommand from "../../../gen/box/commands/AbstractMaxIntervalChangedCommand";

export default class MaxIntervalChangedCommand extends AbstractMaxIntervalChangedCommand {
    execute() {
        this.commandData.maxInterval = this.commandParam.maxInterval;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
