import AbstractToggleAllScheduleCardSelectionCommand from "../../../gen/card/commands/AbstractToggleAllScheduleCardSelectionCommand";

export default class ToggleAllScheduleCardSelectionCommand extends AbstractToggleAllScheduleCardSelectionCommand {
    execute() {
        let selectedCardIds = [];
        if (this.commandData.selectedCardIds.length < this.commandData.cardList.length) {
            this.commandData.cardList.forEach(card => {
                selectedCardIds.push(card.cardId)
            });
        }
        this.commandData.selectedCardIds = selectedCardIds;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
