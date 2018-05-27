import AbstractMaxIntervalChangedCommand from "../../../gen/box/commands/AbstractMaxIntervalChangedCommand";

export default class MaxIntervalChangedCommand extends AbstractMaxIntervalChangedCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
