import AbstractToggleMaxIntervalCommand from "../../../gen/box/commands/AbstractToggleMaxIntervalCommand";

export default class ToggleMaxIntervalCommand extends AbstractToggleMaxIntervalCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
