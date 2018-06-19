import AbstractToggleAllScheduleCardSelectionCommand from "../../../gen/author/commands/AbstractToggleAllScheduleCardSelectionCommand";

export default class ToggleAllScheduleCardSelectionCommand extends AbstractToggleAllScheduleCardSelectionCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
