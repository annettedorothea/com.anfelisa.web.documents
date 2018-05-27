import AbstractToggleMaxIntervalOfBoxCommand from "../../../gen/box/commands/AbstractToggleMaxIntervalOfBoxCommand";

export default class ToggleMaxIntervalOfBoxCommand extends AbstractToggleMaxIntervalOfBoxCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
