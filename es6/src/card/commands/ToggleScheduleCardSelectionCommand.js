import AbstractToggleScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleScheduleCardSelectionCommand";

export default class ToggleScheduleCardSelectionCommand extends AbstractToggleScheduleCardSelectionCommand {
    execute() {
        const index = this.commandData.selectedCardIds.indexOf(this.commandData.cardId);
        if (index !== -1) {
            this.commandData.selectedCardIds.splice(index, 1);
        } else {
            this.commandData.selectedCardIds.push(this.commandData.cardId);
        }
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
