import AbstractMaxIntervalChangedOfBoxCommand from "../../../gen/box/commands/AbstractMaxIntervalChangedOfBoxCommand";

export default class MaxIntervalChangedOfBoxCommand extends AbstractMaxIntervalChangedOfBoxCommand {
    execute() {
        this.commandData.maxInterval = this.commandParam.maxInterval;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
