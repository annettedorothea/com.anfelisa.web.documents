import AbstractToggleScheduleCardSelectionCommand
    from "../../../gen/author/commands/AbstractToggleScheduleCardSelectionCommand";

export default class ToggleScheduleCardSelectionCommand extends AbstractToggleScheduleCardSelectionCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
