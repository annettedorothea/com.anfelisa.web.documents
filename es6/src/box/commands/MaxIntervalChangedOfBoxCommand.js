import AbstractMaxIntervalChangedOfBoxCommand from "../../../gen/box/commands/AbstractMaxIntervalChangedOfBoxCommand";

export default class MaxIntervalChangedOfBoxCommand extends AbstractMaxIntervalChangedOfBoxCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
