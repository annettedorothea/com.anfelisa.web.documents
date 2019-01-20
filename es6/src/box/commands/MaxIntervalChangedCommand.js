import AbstractMaxIntervalChangedCommand from "../../../gen/box/commands/AbstractMaxIntervalChangedCommand";

export default class MaxIntervalChangedCommand extends AbstractMaxIntervalChangedCommand {
    execute() {
        if (this.commandData.editedMaxInterval > 0 || this.commandData.editedMaxInterval === "") {
            this.commandData.outcome = this.ok;
        } else {
            this.commandData.outcome = this.invalid;
        }
    }
}

/*       S.D.G.       */
