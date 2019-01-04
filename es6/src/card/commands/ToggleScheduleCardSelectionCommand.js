import AbstractToggleScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleScheduleCardSelectionCommand";

export default class ToggleScheduleCardSelectionCommand extends AbstractToggleScheduleCardSelectionCommand {
    execute() {
        console.log("ToggleScheduleCardSelectionCommand");
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
